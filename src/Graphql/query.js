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
            username
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

export const GET_MY_POSTS= gql `
query getMyPosts($username:String!,$limit:Int!){
      getMyPosts(username:$username,limit:$limit) {
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
export const GET_USER_PROFILE =gql `
query getUserProfile($username:String!){
  getUser(username:$username){
    username
    displayname
    profile{
      coverImage
      dateOfBirth
      story
      avatar
      fullName
    }
    following{
      id
    }
    follower{
      id
    }
  }
}`;


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
    members{
      username
      displayname
      profile{
				avatar
      }
    }
  }
}`;

export const GET_CHAT= gql `
query getChatReverse($roomId:ID!){
  getChatReverse(roomId:$roomId){
  id
  members{
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
    profile{
      avatar
    }
  }
}`;

export const GET_NOTIFICATIONS=gql `
query getNotification{
  getNotification{
    count
    notifications{
      type
      id
      displayname
      title
      avatar
      username
      createdAt
    }
  }
}`;

export const GET_PRODUCTS = gql `
query getProducts{
  getProducts{
    id
    body
    price
    address
    createdAt
    image
    category
    seller{
      username
    }
  }
}`;

export const GET_PRODUCT= gql `
query getProduct($productId:ID!){
  getProduct(productId:$productId){
    id
    price
    body
    address
    createdAt
    image
    category
    seller{
      username
      displayname
      profile{
        avatar
      }
    }
  }
}`;


    
   
  