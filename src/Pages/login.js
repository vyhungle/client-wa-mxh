import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { useMutation } from "@apollo/react-hooks";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from "react-router-dom";

import { LOGIN } from "../Graphql/mutation";
import { AuthContext } from "../Context/auth";
var errors = {}
const SignupForm = (props) => {

    const context = useContext(AuthContext);
    const [Login, { loading }] = useMutation(LOGIN);
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            Login({
                variables: values,
                update(proxy, { data: { login: userData } }) {
                    errors = {}
                    if (userData.error) {
                        for (var i = 0; i < userData.error.length; i++) {
                            if (userData.error[i].field === "username") {
                                errors.username = userData.error[i].message
                            }
                            else errors.password = userData.error[i].message
                        }
                    }
                    else {
                        context.login(userData.user);
                        props.history.push('/');
                    }

                },

            });

        },
    });
    return (
        <div className="login">
            {loading ? (
                <div className="login__loading">
                    <CircularProgress />
                </div>

            ) : (

                <form onSubmit={formik.handleSubmit}>
                    <div className="login__input">
                        <h2>WELCOME TO SOCICAL</h2>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="username"
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            placeholder="UserName..."
                        />
                    </div>

                    {errors.username && <div className="login__error">{errors.username}</div>}
                    <div className="login__input">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            placeholder="PassWord..."
                        />
                    </div>
                    {errors.password && <div className="login__error">{errors.password}</div>}
                    <div className="layout__bottom">
                        <button type="submit">Login</button>
                        <Link to="/register">reate account</Link>
                    </div>

                </form>
            )}
        </div>

    );
};

export default SignupForm