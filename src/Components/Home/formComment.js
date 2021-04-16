import React from 'react'
import { useFormik } from 'formik';
import { useMutation,useQuery } from "@apollo/react-hooks";

import { CREATE_COMMENT } from "../../Graphql/mutation";
import { GET_MY_USER } from "../../Graphql/query";

function FormComment({id}) {
    const{data:{getMyUser:u}={}}=useQuery(GET_MY_USER)
    const [comment]=useMutation(CREATE_COMMENT)
    const formik=useFormik({
        initialValues:{
            postId:id,
            body:""
        },
        onSubmit:values=>{
            if(values.body===""){
                console.log("comment null")
            }
            else{
                comment({
                    variables:values
                })
            }
          
        }
    })
    return (
        <div className="form-comment">
            <form onSubmit={formik.handleSubmit}>
            {u ? (<img src={u.profile.avatar} alt="avatar" />):(<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU" alt="avatar" />)}
                
                <input
                    id="body"
                    name="body"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.body}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default FormComment
