import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import { GET_POSTS } from "../Graphql/query";
import Post from '../Components/post'
import { Scrollbars } from 'rc-scrollbars';
import CircularProgress from '@material-ui/core/CircularProgress';

import FormPost from "../Components/formPost";



function Posts() {
    const {loading,data:{getPosts:posts}={}}=useQuery(GET_POSTS,{
        variables:{
            limit:10,
        },
        pollInterval:500
        
    })
    return (    
      <Scrollbars style={{height:"100vh"}} autoHide >   
            <FormPost/>  
            {loading ? (
                <CircularProgress color="primary" />
            ):(
                <>
                {posts.posts&&
                posts.posts.map((post)=>(
                    <Post post={post} key={post.id}/>
                ))}
                </>
            )}
       </Scrollbars>
    )
}

export default Posts
