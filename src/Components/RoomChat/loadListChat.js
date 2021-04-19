import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import {ListItem,List} from '@material-ui/core';
import { Link } from "react-router-dom";

import { GET_ROOM_CHAT } from "../../Graphql/query";
import {Scrollbars} from 'react-custom-scrollbars';



function LoadListChat() {
    const {loading,data:{getRoomChat:room}={}}=useQuery(GET_ROOM_CHAT)
    return (
        <div>
            {loading ? (
                <p>loading..</p>
            ):(
                <Scrollbars style={{height:"525px" ,width:"100%", position:"absolute"}} autoHide >
                <List className="list-Chat">
                    {room && room.map((r)=>(
                        <Link to={`/chat/${r.id}`} key={r.id} className="link">
                            <ListItem  className="list-Chat__item">
                            {r.to.profile.avatar===null?(<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU" art="avatar"/>):(<img src={r.to.profile.avatar} art="avatar"/>)}
                              
                                <p>{r.to.displayname}</p>
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
