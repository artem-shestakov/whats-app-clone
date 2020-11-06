import React from 'react'
import './SideBar.css'
import {Avatar, IconButton} from "@material-ui/core";
import {DonutLarge, Chat, MoreVert, SearchOutlined} from "@material-ui/icons";


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
              <IconButton>
                  <SearchOutlined />
              </IconButton>
              <input/>
          </div>
          <div className="SideBarChats">

          </div>
      </div>
    );
}

export default SideBar