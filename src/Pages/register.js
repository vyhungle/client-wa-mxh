import React,{useContext} from 'react'
import { useMutation } from "@apollo/react-hooks";
import { useFormik } from 'formik';

import { AuthContext } from "../Context/auth";
import { REGISTER } from "../Graphql/mutation";
let errors={}
function Register(props) {
    const context=useContext(AuthContext)
    const[register,{loading}]=useMutation(REGISTER)
    const formik=useFormik({
        initialValues:{
            username:"",
            password:"",
            confirmPassword:"",
            email:"",
            displayname:"",
        },
        onSubmit:values=>{
         register({
            variables:values,
            update(proxy,{data:{register:userData}}){
                errors={};
                if(userData.error){
                    userData.error.forEach(element => {
                        if(element.field==="username"){
                            errors.username=element.message
                        }
                        else if(element.field==="password"){
                            errors.password=element.message
                        }
                        else if(element.field==="comfirmPassword"){
                            errors.comfirmPassword=element.message
                        }
                        else if(element.field==="email"){
                            errors.email=element.message
                        }
                        else errors.displayname=element.message
                    });
                  console.log(userData, values)
                }
                else{
                    context.login(userData.user);
                    props.history.push('/');
                }
               
            }
         })
        },
        
    })
    return (
        
        <div className="register">
            <form onSubmit={formik.handleSubmit}>
            <input
                id="username"
                name="username"
                type="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                placeholder="UserName..."
            />  
             {errors.username && <div className="register__error">{errors.username}</div>}
             <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="password..."
            />  
            {errors.password && <div className="register__error">{errors.password}</div>}
             <input
                id="comfirmPassword"
                name="comfirmPassword"
                type="comfirmPassword"
                onChange={formik.handleChange}
                value={formik.values.comfirmPassword}
                placeholder="comfirmPassword..."
            />  
            {errors.comfirmPassword && <div className="register__error">{errors.comfirmPassword}</div>}
             <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="email..."
            />  
            {errors.email && <div className="register__error">{errors.email}</div>}
             <input
                id="displayname"
                name="displayname"
                type="displayname"
                onChange={formik.handleChange}
                value={formik.values.displayname}
                placeholder="displayname..."
            />  
            {errors.displayname && <div className="register__error">{errors.displayname}</div>}
            <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Register
