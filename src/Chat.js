import React, {useEffect, useState} from "react";
import './Chat.css'
import {Avatar, IconButton} from "@material-ui/core";
import {SearchOutlined, AttachFile, MoreVert, InsertEmoticon, Mic} from "@material-ui/icons";
import { useParams } from 'react-router-dom'
import db from './firebase'
import {useStateValue} from "./StateProvider";
import firebase from "firebase";

function Chat() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot(snapshot => {
                setRoomName(snapshot.data().name)
            })
            db.collection("rooms")
                .doc(roomId)
                .collection("messages")
                .orderBy("timestamp", "asc").onSnapshot(snapshot => {
                    setMessages(snapshot.docs.map(doc => doc.data()))
            })
        }
    }, [roomId]);

    const SendMessage = (e) => {
        e.preventDefault();
        db.collection("rooms")
            .doc(roomId)
            .collection("messages")
            .add({
                message: input,
                name: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
        setInput("")
    }

    return (
        <div className='Chat'>
            <div className="ChatHeader">
                <Avatar src={`https://avatars.dicebear.com/api/human/${roomId}.svg`}/>
                <div className="ChatHeaderInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="ChatHeaderRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="ChatBody">
                {messages.map(message => (
                    <p className={`ChatMessage ${true && 'ChatReceiver'}`}>
                        <span className="ChatName">{message.name}</span>
                        {message.message}
                        <span className="ChatTimeStamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}

            </div>
            <div className="ChatFooter">
                <InsertEmoticon />
                <form>
                    <input value={input}
                           onChange={(e) => setInput(e.target.value)}
                           type="text"
                           placeholder="Type a message"/>
                    <button onClick={SendMessage}
                            type="submit">Send a message
                    </button>
                </form>
                <Mic />
            </div>
        </div>
    );
}

export default Chat;