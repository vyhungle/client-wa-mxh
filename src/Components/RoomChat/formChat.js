import React from 'react'
import { Formik,Form } from "formik";
import {useMutation} from "@apollo/react-hooks"
import CircularProgress from '@material-ui/core/CircularProgress';

import {CREATE_CONTENT_CHAT} from '../../Graphql/mutation'

function FormChat({id}) {
    const [createContent,{loading}]=useMutation(CREATE_CONTENT_CHAT);
    return (
        <Formik
        initialValues={{
            content:""
        }}
        onSubmit={(values)=>{
            if(values.content===""){
                console.log(null);
            }
            else
                createContent({
                    variables:{
                        roomId:id,
                        content:values.content
                    }
                })
        }}
        >
        {(formProps)=>(
            <Form>
            <input
            id="content"
            name="content"
            placeholder="Aa"
            type="text"
            onChange={formProps.handleChange}
            />
            <button type="submit">{loading ? (<CircularProgress size="20px"/>):("send")}</button>
            </Form>
        )}
        </Formik>      
    )
}
export default FormChat
