import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PopupChat from "../Components/popupChat";
function ListChat() {
    const[popup,setPopup]=useState(false)
    function openPopup(){
      setPopup(true)
    }
   
    return (
        <div className="listchat">
        {popup===true?(
                <PopupChat trigger={popup} setTrigger={setPopup}/>
        ):(
            ""
        )}
            <div className="listchat__top">
                <h5>Messages</h5>
                <FontAwesomeIcon icon='plus'onClick={openPopup} className="listchat__top--icon"/>
                
            </div>
            <div className="listchat__form">
                <input
                    placeholder="Search for people and groups"
                />
            </div>
            <div className="listchat__member"></div>
        </div>
    )
}

export default ListChat
