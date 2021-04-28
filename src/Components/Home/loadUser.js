import React, { useContext } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Button } from "@material-ui/core";

import { FOLLOWING } from "../../Graphql/mutation";
import { GET_USERS_FOLLOWING } from "../../Graphql/query";
import { AuthContext } from "../../Context/auth";
function LoadUser() {
  const context = useContext(AuthContext);
  const {
    loading,
    data: { getUserFollowing: user } = {},
  } = useQuery(GET_USERS_FOLLOWING, { pollInterval: 500 });
  const [followings] = useMutation(FOLLOWING);
  function setFollowing(e) {
    followings({
      variables: {
        username: e,
      },
    });
  }

  const [seeMore, setSeeMore] = React.useState(0);

  const handelSeeMore = () => {
    setSeeMore(1);
  };
  return (
    <>
      {loading ? (
        ""
      ) : (
        <List className="List-user">
          <h5>WHO TO FOLLOW</h5>
          {user &&
            user.map((u, index) => (
              <div key={index}>
                {index < 5 ? (
                  <ListItem>
                    <div>
                      {u.profile.avatar === null ? (
                        <img
                          src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                          alt="avatar"
                        ></img>
                      ) : (
                        <img src={u.profile.avatar} alt="avatar"></img>
                      )}
                    </div>

                    <div>
                      <p>{u.displayname}</p>
                      <p>@{u.username}</p>
                    </div>
                    <button onClick={() => setFollowing(u.username)}>
                      Follow
                    </button>
                  </ListItem>
                ) : (
                  ""
                )}
              </div>
            ))}

          {seeMore === 1 &&
            user.map((u, index) => (
              <div key={index}>
                {index > 5 ? (
                  <ListItem>
                    <div>
                      <div>
                        {u.profile.avatar === null ? (
                          <img
                            src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                            alt="avatar"
                          ></img>
                        ) : (
                          <img src={u.profile.avatar} alt="avatar"></img>
                        )}
                      </div>
                    </div>
                    <p>{u.displayname}</p>
                    <button onClick={() => setFollowing(u.username)}>
                      Follow
                    </button>
                  </ListItem>
                ) : (
                  ""
                )}
              </div>
            ))}
          {seeMore === 0 ? (
            <Button onClick={() => handelSeeMore()}>See more</Button>
          ) : (
            ""
          )}
        </List>
      )}
    </>
  );
}

export default LoadUser;
