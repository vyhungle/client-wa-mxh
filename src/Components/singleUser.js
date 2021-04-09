import React from 'react'
import { useMutation } from "@apollo/react-hooks";
import ListItem from '@material-ui/core/ListItem';

import { CREATE_ROOM_CHAT} from "../Graphql/mutation"

function SingleUser({user:{id,displayname,profile}}) {
    
    const [createRoom,{loading}] =useMutation(CREATE_ROOM_CHAT)
    function setId(){
        createRoom({
            variables:{
                userId:id
            }
        })
    }
    return (
                <ListItem>
                    <div>
                        <div>
                            <img src={profile.avatar} alt="avatar"></img>
                        </div>
                    </div>
                    <p>{displayname}</p>
                    {loading ? (
                        "..."
                    ):(<button type="button" onClick={setId}>Add</button>)}
                                       
                </ListItem>
    )
}

export default SingleUser