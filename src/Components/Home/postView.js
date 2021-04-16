import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PopupPost from "./popupPost";

function PostView() {
  const [popup, setPopup] = useState(false);
  function openPopup() {
    setPopup(true);
  }
  return (
    <div>
      <div className="post-view">
        <p>What’s on you mind ?</p>
        <button>
          <FontAwesomeIcon icon="arrow-up" onClick={openPopup}/>
        </button>
      </div>
      {popup===true?(
        <PopupPost trigger={popup} setTrigger={setPopup}/>
        ):(
            ""
        )} 
    </div>
  );
}

export default PostView;
