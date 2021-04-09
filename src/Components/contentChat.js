import React,{useContext} from 'react'
import {useQuery} from "@apollo/react-hooks"

import {GET_CHAT} from "../Graphql/query"
import { AuthContext } from "../Context/auth";

function ContentChat({id}) {
    const context=useContext(AuthContext)
    var username=context.user.username;
    const {loading,data:{getChat:chat}={}}=useQuery(GET_CHAT,{variables:{roomId:id},pollInterval:1000})
    return (
        <div className="content-chat">
            <div className="content-chat__header">
                <h5>Name</h5>

            </div>
            <div className="content-chat__body">
                
                   {chat && chat.content.map((Chat)=>(
                    username===Chat.username?(
                        <div key={Chat.id} className="content-chat__body--me">
                        <p>{Chat.content}</p>
                       </div>
                    ):(
                        <div key={Chat.id} className="content-chat__body--you">
                        <p>{Chat.content}</p>
                       </div>
                    )
                       
                       
                   ))}
              
            </div>
            <div className="content-chat__form">
                <input
                    placeholder="Aa"
                />
                <button>Send</button>
            </div>
        </div>
    )
}

export default ContentChat
