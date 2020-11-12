import React, {useEffect, useState} from 'react'
import './SideBarChat.css'
import {Avatar} from "@material-ui/core";
import db from "./firebase"
import {Link} from "react-router-dom";

function SideBarChat({id, name, addNewChat }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (id) {
            db.collection("rooms")
                .doc(id)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot(snapshot => {
                    setMessages(snapshot.docs.map((doc) =>
                        doc.data()))
                })
        }
    }, [id]);

    const createChat = () => {
        const roomName = prompt('Please enter name for chat');

        if (roomName) {
            // create chat
            db.collection('rooms').add({
                name: roomName,
            });
        }
    };

    return !addNewChat ? (
        <Link to={`/room/${id}`}>
            <div className='SideBarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${id}.svg`} />
                <div className="SideBarChatInfo">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div className="SideBarChat" onClick={createChat}>
            <h2>Add new Chat</h2>
        </div>
    );
}

export default SideBarChat