import gql from "graphql-tag";

export const LOGIN=gql`

mutation login($username:String!,$password:String!){
    login(username:$username,password:$password) {
        error{
            field
            message
        }

        user{
            id
            email
            token
            username
            createdAt
            displayname
            profile{
              avatar
              fullName
          }
        }
    }
}`;

export const LIKEPOST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        id
        username
      }
      likeCount
    }
  }
`;

export const CREATE_COMMENT=gql `
mutation createComment($postId:String!,$body:String!){
  createComment(postId:$postId body:$body){
    comments{
      createdAt
      username
      displayname
      body
      avatar
    }
  }
}
`

export const REGISTER = gql`
mutation register(
  $username: String!
  $email: String!
  $password: String!
  $confirmPassword: String!
  $displayname:String!
) {
  register(
    registerInput: {
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
      displayname:$displayname
    }
  ) {
    error{
    field
    message
  }
  user{
    id
    email
    token
    username
    createdAt
    displayname
    profile{
              avatar
              fullName
          }
    }
  }
}
`;


export const CREATE_POST=gql `
  mutation createPost($body:String,$image:[String]){
  createPost(body:$body, image:$image){
    id  
    body
  }
}
`;

export const FIND_USERS= gql `
mutation findUsers($displayname:String!){
  findUsers(displayname:$displayname){
    id
    email
    username
    createdAt
    displayname
    profile{
      avatar
    }
  }
}`;

export const CREATE_ROOM_CHAT= gql `
mutation createRoomChat($userId:String!){
  createRoomChat(userId:$userId){
    id
    content{
      id
      username
      createdAt
      content
    }
  }
}`;


export const CREATE_CONTENT_CHAT=gql `
mutation createContentChat($roomId:String!, $content:String!) {
  createContentChat(roomId:$roomId content:$content){
    content{
      displayname
      username
      id
      createdAt
      content
    }
  }
}`;

export const FOLLOWING =gql `
mutation following($username:String!){
  following(username:$username){
    id
  }
}`;

export const EDIT_PROFILE=gql `
mutation editProfile($avatar:String,$dateOfBirth:String,$fullname:String!,$story:String,$coverImage:String){
  editProfile(avatar:$avatar, dateOfBirth:$dateOfBirth, fullName:$fullname, story:$story, coverImage:$coverImage){
    id
  }
}`;

export const CREATE_PRODUCT= gql `
mutation createProduct($image:[String]!,$price:String!,$address:String!,$body:String!,$category:String!,$describe:String){
  createProduct(image:$image,price:$price,address:$address,body:$body,category:$category,describe:$describe){
    error{
      field
      message
    }
    product{
      id
    
    }
  }
}`;

    
   
  