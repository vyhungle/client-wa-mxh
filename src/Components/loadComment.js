import React from 'react'
import { useQuery } from "@apollo/react-hooks";

import { GET_COMMENT } from "../Graphql/query";
function LoadComment({id}) {

    const{loading,data:{getPost:post}={}}=useQuery(GET_COMMENT,{
        variables:{
            postId:id
        },
        pollInterval:1000

    });
    return (
        <div className="comment">
        {post && post.comments.map((Comment)=>(
            <div key={Comment.id}>
                <img src={Comment.avatar}/>
                <p>{Comment.body}</p>
            </div>
        ))}
           
        </div>
    )
}

export default LoadComment
