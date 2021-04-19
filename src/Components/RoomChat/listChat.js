import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "@material-ui/core/Menu";

import PopupChat from "../RoomChat/popupChat";
import LoadListChat from "./loadListChat";
function ListChat() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="listchat">
      <div className="listchat__top">
        <div>
          <span>
            {" "}
            <FontAwesomeIcon icon="search" />
          </span>
          <input placeholder="Search..." />
          <FontAwesomeIcon icon="plus-square" onClick={handleClick} />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className="menu__addchat"
          >
           <PopupChat/>
          </Menu>
        </div>
      </div>
      <div className="listchat__member">
        <LoadListChat />
      </div>
    </div>
  );
}

export default ListChat;
