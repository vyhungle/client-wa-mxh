import React from "react";
import { Formik, Form } from "formik";
import { useMutation } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CREATE_POST } from "../../Graphql/mutation";

function PopupPost(props) {
  var base64Image = "";

  function uploadImage(files, formProps) {
    const file = files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      base64Image = reader.result;
      formProps.setFieldValue("image", base64Image);
    };
    reader.readAsDataURL(file);
  }

  const [createPost] = useMutation(CREATE_POST);

  return (
    <div>
      <Formik
        initialValues={{
          body: "",
          image: "",
        }}
        onSubmit={(values) => {
          if (values.body === "" && values.image === "") {
          } else {
            createPost({
              variables: values,
            });
          }
        }}
      >
        {(formProps) => (
          <>
            {props.trigger === false ? (
              ""
            ) : (
              <div className="popup-post">
                <div className="popup-post__box">
                  <FontAwesomeIcon
                    icon="times"
                    className="popup-post__box--icon"
                    onClick={() => props.setTrigger(false)}
                  />

                  <Form>
                    <div className="popup-post__box--input">
                      <textarea
                        id="body"
                        name="body"
                        type="textarea"
                        placeholder="How are you to day?"
                        onChange={formProps.handleChange}
                      />
                      <label htmlFor="image">
                          {" "}
                          <FontAwesomeIcon icon="images" />
                        </label>
                    </div>

                    <div className="popup-post__box--submit">
                    {base64Image && (<img src={base64Image} alt="imagepost"/>)}
                          
                          
                      <div>
                       
                        <input
                          id="image"
                          name="image"
                          type="file"
                          onChange={(e) => {
                            uploadImage(e.target.files, formProps);
                          }}
                        />                    
                        <button type="submit">submit</button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            )}
          </>
        )}
      </Formik>
    </div>
  );
}

export default PopupPost;
