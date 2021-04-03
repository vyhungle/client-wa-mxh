import React,{useContext} from 'react'
import { useFormik } from 'formik';
import { useMutation } from "@apollo/react-hooks";

import { CREATE_COMMENT } from "../Graphql/mutation";

function FormComment({id}) {
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
                <img src="" alt="avatar" />
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
