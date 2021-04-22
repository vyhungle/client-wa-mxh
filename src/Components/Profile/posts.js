import React from 'react'
import { useQuery } from "@apollo/react-hooks";

import Post from '../Home/post'
import CircularProgress from '@material-ui/core/CircularProgress';
import { GET_MY_POSTS } from "../../Graphql/query";




function Posts({ username }) {
    const {loading,data:{getMyPosts:posts}={}}=useQuery(GET_MY_POSTS,{
        variables:{
            limit:100,
            username
        },
        
    })
    console.log(posts)
    return (  
    <div>
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
