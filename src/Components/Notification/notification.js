import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "@material-ui/core/Menu";
import { useQuery } from "@apollo/react-hooks";
import moment from "moment";

import { GET_NOTIFICATIONS } from "../../Graphql/query";
import likeIcon from "../../Fonts/icons/like.png";
import commentIcon from "../../Fonts/icons/notification.png";
import followIcon from "../../Fonts/icons/friend-request.png";

function Notification() {
  const { data: { getNotification: ntf } = {} } = useQuery(GET_NOTIFICATIONS, {
    pollInterval: 500,
  });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="menu-header__right--icon" onClick={handleClick}>
        <FontAwesomeIcon icon="bell" />
        <div>
          <span>{ntf &&(
              <>
              {ntf.count>9?("9+"):(ntf.count)}
              </>
          )}</span>
        </div>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="menu-header__right--notification"
      >
        <div className="menu-header__right--notification--content">
          <h5>NOTIFICATION</h5>
            {ntf && ntf.notifications.map((n) => (
                <div key={n.id}>
                {n.avatar?(<img src={n.avatar}></img>):
                (<img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"></img>)}
                  {n.type==="Like"?(
                    <img className="icon" alt="like" src={likeIcon}/>
                  ):(<>
                    {n.type==="Comment"?( <img className="icon" alt="comment" src={commentIcon}/>)
                    :(<img className="icon" alt="follow" src={followIcon}/>)}
                  </>)}
                  <div>
                  <div>
                  <p><span>{n.displayname}</span> {n.title}</p>    
                    <p>{moment(n.createdAt).fromNow(true)}</p>    
                  </div>
                           
                  </div>
                </div>
              ))}
         
        </div>
      </Menu>
    </>
  );
}

export default Notification;
