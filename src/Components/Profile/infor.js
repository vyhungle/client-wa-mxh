import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@apollo/react-hooks";

import { GET_USER_PROFILE } from "../../Graphql/query";

function Infor({ username }) {
    const {loading,data:{getUser:user}={}}=useQuery(GET_USER_PROFILE,{
        variables:{
            username
        },
        
    })
  return (
    <div className="profile__top">
      {user && (
        <>
        {user.profile.coverImage===null ?
        (
            <img
            src="https://i.pinimg.com/originals/b8/4f/41/b84f4195a6d33c93d01111287c0c7b7e.jpg"
            alt="imagecover"
            className="profile__top--imagecover"
          />
        ):(
            <img
            src={user.profile.coverImage}
            alt="imagecover"
            className="profile__top--imagecover"
          />
        )}
          {user.profile.avatar===null?
          (
            <img
            className="profile__top--avatar"
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
            alt="avatar"
          />
          ):
          (<img
            className="profile__top--avatar"
            src={user.profile.avatar}
            alt="avatar"
          />)}
          
          <div className="profile__top--infomation">
            <h5>{user.displayname}</h5>
            <p>{user.profile.story}</p>
            <FontAwesomeIcon icon="calendar-alt" />
            <span>{user.profile.dateOfBirth}</span>
            <br></br>
            <div>
              <p>{user.following.length}</p>
              <span>Following</span>
              <p>{user.following.length}</p>
              <span>Follower</span>
            </div>
          </div>
        </>
      )}
      <button>Edit profile</button>
    </div>
  );
}

export default Infor;
