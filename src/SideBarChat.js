import React, {useEffect, useState} from 'react'
import './SideBarChat.css'
import {Avatar} from "@material-ui/core";
import db from "./firebase"

function SideBarChat({id, name, addNewChat }) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));

    }, []);

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
        <div className='SideBarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="SideBarChatInfo">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div className="SideBarChat" onClick={createChat}>
            <h2>Add new Chat</h2>
        </div>
    );
}

export default SideBarChat