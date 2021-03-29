import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import { GET_POSTS } from "../Graphql/index";
import Grid from '@material-ui/core/Grid';
import Post from '../Components/post'
import { Scrollbars } from 'rc-scrollbars';



function Posts() {
    const {loading,data:{getPosts:posts}={}}=useQuery(GET_POSTS,{
        variables:{
            limit:100,
        },
        pollInterval:1000
        
    })
    return (    
      <Scrollbars style={{height:"800px"}} >     
            {loading ? (
                <h1>loading post...</h1>
            ):(
                <>
                {posts.posts&&
                posts.posts.map((post)=>(
                    <Post post={post}/>
                ))}
                </>
            )}
       </Scrollbars>
    )
}

export default Posts
