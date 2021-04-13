import React from 'react'
import { Formik,Form } from "formik";
import { useMutation } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CREATE_POST } from "../../Graphql/mutation";


function FormPost() {
    var base64Image="";

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

    const [createPost]=useMutation(CREATE_POST)


   
    return (
        <div>
            <Formik
                initialValues={{
                    body:"",
                    image:"",
                }}
                onSubmit={(values)=>{
                    if(values.body==="" && values.image===""){
                       
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
