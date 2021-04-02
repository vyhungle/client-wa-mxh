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


    
   
  