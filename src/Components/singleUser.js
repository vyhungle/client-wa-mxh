import React from 'react'
import { useQuery } from "@apollo/react-hooks";

import ListItem from '@material-ui/core/ListItem';

function SingleUser({user:{displayname,profile}}) {
    return (
                <ListItem>
                    <div>
                        <div>
                            <img src={profile.avatar} alt="avatar"></img>
                        </div>
                    </div>
                    <p>{displayname}</p>
                    <button>Add</button>                   
                </ListItem>
    )
}

export default SingleUser