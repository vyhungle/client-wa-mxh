import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PopupChat from "./popupChat";
import LoadListChat from "./loadListChat";
function ListChat() {
    
    const[popup,setPopup]=useState(false)
    function openPopup(){
      setPopup(true)
    }
   
    return (
        <div className="listchat">
            <div className="listchat__top">        
               <div>
                    <span>  <FontAwesomeIcon icon='search'/></span>                 
                   <input 
                       placeholder="Search..."
                   />
               </div>
                
            </div>
            <div className="listchat__form">
               
            </div>
            <div className="listchat__member">
                <LoadListChat/>
            </div>
        </div>
    )
}

export default ListChat
