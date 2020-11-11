import React, {useEffect, useState} from "react";
import './Chat.css'
import {Avatar, IconButton} from "@material-ui/core";
import {SearchOutlined, AttachFile, MoreVert, InsertEmoticon, Mic} from "@material-ui/icons";
import { useParams } from 'react-router-dom'
import db from './firebase'

function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name)
            })
        }
    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const SendMessage = (e) => {
        e.preventDefault();
        console.log("You typed:", input)
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
                <p className={`ChatMessage ${true && 'ChatReceiver'}`}>
                    <span className="ChatName">Artem Shestakov</span>
                    Hello guys
                    <span className="ChatTimeStamp">12:00</span>
                </p>
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