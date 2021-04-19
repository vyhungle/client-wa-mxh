import React,{useContext} from 'react'
import {useQuery} from "@apollo/react-hooks"



import {GET_CHAT} from "../../Graphql/query"
import { AuthContext } from "../../Context/auth";
import FormChat from "./formChat";
import {Scrollbars} from 'react-custom-scrollbars';


function ContentChat({id}) {
    if(id===undefined) id=""
    var username
    const context=useContext(AuthContext)
    context.user===null ?  username="" : username=context.user.username;  
    const {data:{getChat:chat}={}}=useQuery(GET_CHAT,{variables:{roomId:id},pollInterval:1000})
    console.log(chat)
    
 
    return (
        <div className="content-chat">
            <div className="content-chat__header">
            {chat &&(<>
            <h5>{chat.from.displayname}</h5>  
           </>)}
             
              
            </div>
            <div className="content-chat__body  d-flex flex-column-reverse"  >
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
               <FormChat id={id}/>
            </div>
           
        </div>
    )
}

export default ContentChat
