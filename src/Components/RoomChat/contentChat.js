import React,{useContext} from 'react'
import {useQuery} from "@apollo/react-hooks"



import {GET_CHAT} from "../../Graphql/query"
import { AuthContext } from "../../Context/auth";
import FormChat from "./formChat";
import {Scrollbars} from 'react-custom-scrollbars';


function ContentChat({id}) {
    if(id===undefined) id=""
    const context=useContext(AuthContext)
    var username=context.user.username;
    const {data:{getChat:chat}={}}=useQuery(GET_CHAT,{variables:{roomId:id},pollInterval:1000})
  console.log(chat)
    return (
        <div className="content-chat">
            <div className="content-chat__header">
                <h5>{chat&& (
                    id=chat.id,
                    <>
                        {chat.to.username===username ? (
                            <span>{chat.from.displayname}</span>
                        ):(
                            <span>{chat.to.displayname}</span>
                        )}
                    </>

                )}</h5>

            </div>
           
          <Scrollbars style={{height:"525px" ,width:"100%", marginTop:"35px", position:"absolute"}} autoHide >
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
            </Scrollbars>
           
            <div className="content-chat__form">
               <FormChat id={id}/>
            </div>
           
        </div>
    )
}

export default ContentChat
