import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GET_USERS } from "../Graphql/query";
function LoadUser() {
    const { data: { getUsers: user } = {} } = useQuery(GET_USERS)
    console.log(user)
    return (
        <List className="List-user">
            <h5>Who to follow</h5>
            {user && user.map((u) => (
                <ListItem key={u.id} >
                    <div>
                        <div>
                            <img src={u.profile.avatar}></img>
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


