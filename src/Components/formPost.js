import React,{useState} from 'react'
import { useFormik,Formik,Form,Field } from "formik";
import { useMutation } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CREATE_POST } from "../Graphql/mutation";


function FormPost() {
    var base64Image="aaaaaaa";

    function uploadImage(files,formProps){
        const file = files[0]
        var reader = new FileReader();
        reader.onloadend = function () {
           
          base64Image=reader.result;
          console.log(base64Image)
          formProps.setFieldValue('image', base64Image)
        }
        reader.readAsDataURL(file);
      
    }

    const [createPost,{loading}]=useMutation(CREATE_POST)


   
    return (
        <div>
            <Formik
                initialValues={{
                    body:"",
                    image:"",
                }}
                onSubmit={(values)=>{
                    if(values.body==="" && values.image===""){
                        console.log("null")
                    }
                    else{
                        createPost({
                        variables:values
                    })
                    }
                   
                }}
            >
            {(formProps)=>(
                <div className="form-post">
                <Form>
                <div className="form-post__body">
                <textarea
                        id="body"
                        name='body'
                        type='textarea'
                        placeholder="How are you to day?"
                        onChange={formProps.handleChange}
                        onSubmit={formProps.values.body}
                    />
                </div>

                <div className="form-post__submit">
                <div className="form-post__submit--box">
                    <div>
                    <label for="image">  <FontAwesomeIcon icon="images"/></label>
                    </div>
                    
                    <input
                            id="image"
                            name='image'
                            type='file'
                            onChange={(e)=> {
                                uploadImage(e.target.files,formProps);
                            }}
                            onSubmit={formProps.values.image}
                        />
                    <button type="submit">submit</button>
                </div>
                
                </div>
                
                     
                </Form>
                </div>
                
            )}
            </Formik>
        </div>
    )
}

export default FormPost