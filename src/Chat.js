import React, {useEffect, useState} from "react";
import './Chat.css'
import {Avatar, IconButton} from "@material-ui/core";
import {SearchOutlined, AttachFile, MoreVert, InsertEmoticon, Mic} from "@material-ui/icons";

function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const SendMessage = (e) => {
        e.preventDefault();
        console.log("You typed:", input)
    }

    return (
        <div className='Chat'>
            <div className="ChatHeader">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="ChatHeaderInfo">
                    <h3>Room name</h3>
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