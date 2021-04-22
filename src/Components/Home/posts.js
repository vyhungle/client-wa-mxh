import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import { GET_POSTS } from "../../Graphql/query";
import Post from './post'
import CircularProgress from '@material-ui/core/CircularProgress';


import PostView from "./postView";




function Posts() {
    const {loading,data:{getPosts:posts}={}}=useQuery(GET_POSTS,{
        variables:{
            limit:100,
        },
        pollInterval:500
        
    })
 
    return (  
    <div>
        <PostView/>  
            {loading ? (
                <CircularProgress color="primary" />
            ):(
                <>
                {posts &&
                posts.posts.map((post)=>(
                    <Post post={post} key={post.id}/>
                ))}
                </>
            )}
     
    </div>  
     
    )
}

export default Posts
