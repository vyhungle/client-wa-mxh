import React from 'react';
import {Formik,Form } from 'formik';
import Menu from "@material-ui/core/Menu";
import { useMutation,useQuery } from "@apollo/react-hooks";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';


import { EDIT_PROFILE } from "../../Graphql/mutation";
import { GET_USER_PROFILE } from "../../Graphql/query";
import { ValuesOfCorrectTypeRule } from 'graphql';

function PopupEditProfile({username}) {
    const [editProfile,{loading,data:{editProfile:profile}={}}]=useMutation(EDIT_PROFILE);
    const {data:{getUser:user}={}}=useQuery(GET_USER_PROFILE,{
        variables:{
            username
        },
        
    })
    

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    var ImageCover = "";
    function uploadImageCover(files,formProps) {
      const file = files[0];
      var reader = new FileReader();
      reader.onloadend = function () {
        ImageCover = reader.result;
        formProps.setFieldValue("coverImage", ImageCover);
      };
      reader.readAsDataURL(file);
    }
    var ImageAvatar = "";
    function uploadImageAvatar(files,formProps) {
      const file = files[0];
      var reader = new FileReader();
      reader.onloadend = function () {
        ImageAvatar = reader.result;
        formProps.setFieldValue("avatar", ImageAvatar);  
      };
      reader.readAsDataURL(file);
    }
    
  return (
    <div>
       <button onClick={handleClick}>Edit profile</button>
       <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className="popup-profile"
          >
          <div className="profile">
           
               
                <Formik
                  initialValues={{
                    avatar:user.profile.avatar,
                    dateOfBirth:user.profile.dateOfBirth,
                    fullname:user.profile.fullName,
                    story:user.profile.story,
                    coverImage:user.profile.coverImage
                  }}
                  onSubmit={(values)=>{
                    editProfile({
                      variables:values
                    })
                  }}
                >
                {(formProps)=>(
                  <>
                  <Form>
                    {user&&(
                        <>                 
                        <label htmlFor="coverImage" className="profile__inputfile__cover"> <AddAPhotoIcon /></label>
                       
                        <label htmlFor="avatar" className="profile__inputfile__avatar"> <AddAPhotoIcon /></label>
                        <input
                             id="coverImage"
                            type="file"
                            className="profile__inputfile"
                            onChange={(e) => {
                              uploadImageCover(e.target.files,formProps);
                          }}
                        />
                          <input
                             id="avatar"
                            type="file"
                            className="profile__inputfile"
                            onChange={(e) => {
                              uploadImageAvatar(e.target.files,formProps);
                          }}
                        />
                        {ImageCover?(<img className="profile__cover" alt="image cover" src={ImageCover}/>):
                        (<>
                          {user.profile.coverImage?(<img className="profile__cover" alt="image cover" src={user.profile.coverImage}/>):
                          (<img className="profile__cover" alt="image cover" 
                          src="https://i.pinimg.com/originals/b8/4f/41/b84f4195a6d33c93d01111287c0c7b7e.jpg"/>)}
                        </>)}
                        
                        {ImageAvatar?( <img className="profile__avatar" alt="avatar" src={ImageAvatar}/>):
                        ( <>
                          {user.profile.avatar?(<img className="profile__avatar" alt="avatar" src={user.profile.avatar}/>):
                          (<img className="profile__avatar" alt="avatar" 
                            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
                          />)}
                        </>)}
                       
                        <div className="profile__inputs">
                            <input 
                                type="text"
                                id="fullname"
                                placeholder="Full Name"
                                value={formProps.values.fullname}
                                onChange={formProps.handleChange}
                            />
                            <input                              
                                id="dateOfBirth"
                                type="date"
                                placeholder="Date Of Birth"
                                value={formProps.values.dateOfBirth}
                                onChange={formProps.handleChange}
                                
                            />
                            <input 
                                type="text"
                                id="story"
                                placeholder="Story"
                                value={formProps.values.story}
                                onChange={formProps.handleChange}
                               
                                
                            />
                            <button type="submit"  onClick={handleClose}>Save</button>
                        </div>
                        </>
                    )}
                </Form>
                </>
                )}
                </Formik>
                </div>
          </Menu>
    </div>
    
  );
}

export default PopupEditProfile;
