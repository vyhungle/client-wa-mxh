import React, { useContext } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { FOLLOWING } from "../../Graphql/mutation";
import { GET_MY_USER } from "../../Graphql/query";

function SingleFriendList(props) {
  const { data: { getMyUser: myUser } = {} } = useQuery(GET_MY_USER, {
    pollInterval: 500,
  });
  const [followings] = useMutation(FOLLOWING);
  function setFollowing(e) {
    followings({
      variables: {
        username: e,
      },
    });
  }


  return (
    <List className="list-friend" style={{ marginTop: "15px" }}>
      <h5>MY FOLLOWING</h5>
      {myUser &&
        myUser.following.map((u) => (
          <div key={u.id} onClick={()=>props.setTrigger(u.username)}>
            <ListItem>
              <div>
                {u.avatar === null ? (
                  <img
                    src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                    alt="avatar"
                  ></img>
                ) : (
                  <img src={u.avatar} alt="avatar"></img>
                )}
              </div>
              <div className="list-friend-body">
                <p>{u.displayname}</p>
                <p>@{u.username}</p>
              </div>
            </ListItem>
          </div>
        ))}
    </List>
  );
}

export default SingleFriendList;
