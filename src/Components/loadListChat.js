import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import {ListItem,List} from '@material-ui/core';
import { Link } from "react-router-dom";

import { GET_ROOM_CHAT } from "../Graphql/query";



function LoadListChat() {
    const {loading,data:{getRoomChat:room}={}}=useQuery(GET_ROOM_CHAT)
    return (
        <div>
            {loading ? (
                <p>loading..</p>
            ):(
               
                <List className="list-Chat">
                    {room && room.map((r)=>(
                        <Link to={`/chat/${r.id}`} key={r.id}>
                            <ListItem  className="list-Chat__item">
                                <img src={r.to.profile.avatar} art="avatar"/>
                                <p>{r.to.displayname}</p>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                
            )}
        </div>
    )
}

export default LoadListChat
