import gql from "graphql-tag";

export const GET_POSTS=gql`
     query getPosts($limit:Int!){
      getPosts(limit:$limit) {
        posts{
            id
            body
            createdAt
            displayname
            image
            avatar
            comments{
            id
            createdAt
            username
            body
            }
            likes{
            id
            createdAt
            username
            }
            likeCount
            commentCount
      }
    }
}`;

export const GET_COMMENT=gql`
  query getPost($postId:ID!){
  getPost(postId:$postId){
    comments{
      id
      createdAt
      username
      displayname
      body
      avatar
    }
  }
}
`;

export const GET_USER=gql `
query getUser {
  getUser{
    id
    email
    displayname
    createdAt
    profile{
      avatar
      dateOfBirth
      story
      follower
      following
      story
    }
   friends{
    id
    username
    createdAt
  }
    
  }
}
`;

export const GET_USERS= gql `
  query getUsers {
  getUsers{
    id
    email
    username
    displayname
    profile{
      avatar
    }
    following{
      username
    }
  }
}
`

export const GET_USERS_FOLLOWING= gql `
  query getUserFollowing {
    getUserFollowing{
    id
    email
    username
    displayname
    profile{
      avatar
    }
    following{
      username
    }
  }
}
`
export const GET_ROOM_CHAT= gql `
query getRoomChat{
  getRoomChat{
    id
    to{
      username
      displayname
      profile{
				avatar
      }
    }
  }
}`;

export const GET_CHAT= gql `
query getChat($roomId:ID!){
 getChat(roomId:$roomId){
  id
  from{
      username
      displayname
      profile{
				avatar
      }
      }
  content{
    id
    displayname
    content
    createdAt
    username
  }
}
}`;

export const GET_MY_USER= gql `
query getMyUser{
  getMyUser{
    username
    displayname
    profile{
      avatar
    }
    following{
      id
      displayname
      avatar
      username
    }
  }
}`;


    
   
  