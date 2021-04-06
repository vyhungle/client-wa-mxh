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
    }
  }
}
`;


export const CREATE_POST=gql `
  mutation createPost($body:String,$image:String){
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


    
   
  