import React, {useEffect, useState} from 'react'
import './SideBar.css'
import './SideBarChat'
import {Avatar, IconButton} from "@material-ui/core";
import {DonutLarge, Chat, MoreVert, SearchOutlined} from "@material-ui/icons";
import SideBarChat from "./SideBarChat";
import db from "./firebase"
import {useStateValue} from "./StateProvider";


function SideBar() {
    const [rooms, setRooms] = useState([]);
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot((snapshot) => (
            setRooms(snapshot.docs.map((doc) =>
                ({
                    id: doc.id,
                    data:doc.data(),
                })
            ))
        ));
        return () => {
            unsubscribe();
        }
    }, []);

    return (
      <div className='SideBar'>
          <div className="SideBarHeader">
              <Avatar src={user.photoURL}/>
              <div className="SideBarHeaderRight">
                  <IconButton>
                      <DonutLarge />
                  </IconButton>
                  <IconButton>
                      <Chat />
                  </IconButton>
                  <IconButton>
                      <MoreVert />
                  </IconButton>
              </div>
          </div>
          <div className="SideBarSearch">
              <div className="SideBarSearchContainer">
                  <SearchOutlined />
                  <input placeholder='Search or start new chat' type='text'/>
              </div>

          </div>
          <div className="SideBarChats">
              <SideBarChat addNewChat />
              {rooms.map((room) => (
                   <SideBarChat key={room.id} id={room.id} name={room.data.name} />
                   )
              )}
          </div>
      </div>
    );
}

export default SideBar