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

export const REGISTER = gql`
mutation register(
  $username: String!
  $email: String!
  $password: String!
  $comfirmPassword: String!
  $displayname:String!
) {
  register(
    registerInput: {
      username: $username
      email: $email
      password: $password
      confirmPassword: $comfirmPassword
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

    
   
  