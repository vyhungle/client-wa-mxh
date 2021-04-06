import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PopupChat(props) {
    return (

        <div>
            {props.trigger === false ? (
                ""
            ) : (
                <div className="popup">
                <div className="listchat__popup">
                    <div className="listchat__popup--top">
                    <FontAwesomeIcon icon='times' onClick={()=>props.setTrigger(false)}/>
                        <h5>New Message</h5>
                        <button>Add</button>
                       
                    </div>
                    <div className="listchat__popup--input">
                        <input
                            placeholder="Search for people and groups"
                        />
                    </div>
                </div>
                </div>
            )}
        </div>



    )
}

export default PopupChat
