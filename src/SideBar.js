import React from 'react'
import './SideBar.css'
import './SideBarChat'
import {Avatar, IconButton} from "@material-ui/core";
import {DonutLarge, Chat, MoreVert, SearchOutlined} from "@material-ui/icons";
import SideBarChat from "./SideBarChat";


function SideBar() {
    return (
      <div className='SideBar'>
          <div className="SideBarHeader">
              <Avatar />
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
              <SideBarChat />
              <SideBarChat />
              <SideBarChat />
              <SideBarChat />
              <SideBarChat />
              <SideBarChat />
              <SideBarChat />
              <SideBarChat />
              <SideBarChat />
              <SideBarChat />
              <SideBarChat />
              <SideBarChat />
          </div>
      </div>
    );
}

export default SideBar