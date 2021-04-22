import React,{useContext} from 'react'
import { useQuery } from "@apollo/react-hooks";
import {ListItem,List} from '@material-ui/core';
import { Link } from "react-router-dom";

import { GET_ROOM_CHAT } from "../../Graphql/query";
import {Scrollbars} from 'react-custom-scrollbars';
import {  AuthContext} from "../../Context/auth";



function LoadListChat() {
    const {loading,data:{getRoomChat:room}={}}=useQuery(GET_ROOM_CHAT,{pollInterval:400})
    const user=useContext(AuthContext)
    var username;
    user.user===null ?  username="" : username=user.user.username;  
    return (
        <div>
            {loading ? (
                ""
            ):(
                <Scrollbars style={{height:"525px" ,width:"100%", position:"absolute"}} autoHide >
                <List className="list-Chat">
                    {room && room.map((r)=>(
                        <Link to={`/chat/${r.id}`} key={r.id} className="link">
                            <ListItem  className="list-Chat__item">
                            {r.members[0].username!==username ?(
                                <>
                                {r.members[0].profile.avatar===null?(<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU" alt="avatar"></img>):
                                (<img src={r.members[0].profile.avatar} art="avatar"/>)}
                               <p>{r.members[0].displayname}</p>
                               </>
                            ):(
                                <>
                                {r.members[1].profile.avatar===null?(<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU" alt="avatar"></img>):
                                (<img src={r.members[1].profile.avatar} art="avatar"/>)}
                                <p>{r.members[1].displayname}</p>
                                </>
                            )}
                          
                              
                              
                            </ListItem>
                        </Link>
                    ))}
                </List>
                </Scrollbars>
                
            )}
        </div>
    )
}

export default LoadListChat
