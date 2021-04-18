import React,{useContext} from 'react'
import { useQuery,useMutation } from "@apollo/react-hooks";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { FOLLOWING } from "../../Graphql/mutation";
import { GET_MY_USER } from "../../Graphql/query";

function SingleFriendList() {
    const {data:{getMyUser:myUser}={}}=useQuery(GET_MY_USER,{pollInterval:500})
    const [followings]=useMutation(FOLLOWING);
    function setFollowing(e){
        followings({
            variables:{
                username:e
            },
           
        })
    }
    return (
        <List className="List-user" style={{marginTop:"15px"}}>
        <h5>You Are Following</h5>
            {myUser && myUser.following.map((u) => (              
                <ListItem key={u.id} >
                    <div>
                        <div>
                            {u.avatar===null ? (
                                <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" alt="avatar"></img>
                            ):( <img src={u.avatar} alt="avatar"></img>)}
                           
                        </div>
                    </div>
                    <p>{u.displayname}</p>                     
                    <button  onClick={()=>setFollowing(u.username)}>UnFollow</button>
                    
                </ListItem>
            ))}
        </List>
    )
}

export default SingleFriendList
