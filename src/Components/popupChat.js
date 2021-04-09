import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Form } from "formik";
import { useMutation } from "@apollo/react-hooks";
import List from '@material-ui/core/List';

import { FIND_USERS } from "../Graphql/mutation";
import SingleUser from "../Components/singleUser";

function PopupChat(props) {
    const [findUsers, { data: { findUsers: u } = {}, loading }] = useMutation(FIND_USERS);
    return (
        <div>
            <Formik
                initialValues={{
                    displayname: ""
                }}
                onSubmit={(values) => {

                    findUsers({
                        variables: values,
                        update(proxy, { data: { findUsers: u } = {} }) {} })}}
            >
                {(formProps) => (
                    <Form>
                        {props.trigger === false ? (
                            ""
                        ) : (
                            <div className="popup">
                                <div className="listchat__popup">
                                    <div className="listchat__popup--top">
                                        <FontAwesomeIcon icon='times' onClick={() => props.setTrigger(false)} />
                                        <h5>New Message</h5>


                                    </div>
                                    <div className="listchat__popup--input">
                                        <input
                                           
                                            id="displayname"
                                            name="displayname"
                                            placeholder="Search for people and groups"
                                            onChange={
                                                formProps.handleChange
                                            }
                                            value={formProps.values.displayname}
                                        />
                                    </div>

                                    <div className="listchat__popup--member">
                                        {loading ? (<p>loading</p>) : (
                                            <div>
                                            <List className="List-user" style={{border:"none"}}>
                                                {u && u.map((u) => (
                                                    <SingleUser user={u} key={u.id}/>                                                  
                                                ))}
                                                </List>
                                            </div>
                                        )}

                                    </div>


                                </div>
                            </div>
                        )}
                    </Form>
                )}
            </Formik>


        </div>



    )
}

export default PopupChat
