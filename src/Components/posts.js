import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import { GET_POSTS } from "../Graphql/query";
import Post from '../Components/post'
import { Scrollbars } from 'rc-scrollbars';
import CircularProgress from '@material-ui/core/CircularProgress';



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
