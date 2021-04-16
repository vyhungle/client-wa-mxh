import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


import { GET_USERS } from "../../Graphql/query";
function LoadUser() {
    const { data: { getUsers: user } = {} } = useQuery(GET_USERS)
    return (
        <List className="List-user">
            <h5>Who to follow</h5>
            {user && user.map((u) => (              
                <ListItem key={u.id} >
                    <div>
                        <div>
                            {u.profile.avatar===null ? (
                                <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" alt="avatar"></img>
                            ):( <img src={u.profile.avatar} alt="avatar"></img>)}
                           
                        </div>
                    </div>
                    <p>{u.displayname}</p>
                    <button>Follow</button>
                    
                </ListItem>
            ))}
        </List>
    )
}

export default LoadUser


