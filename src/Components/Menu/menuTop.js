import React, { useState,useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";

import { AuthContext } from "../../Context/auth";
import { GET_MY_USER } from "../../Graphql/query";

function MenuTop() {
    const {user,logout}=useContext(AuthContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const {data:{getMyUser:u}={}}=useQuery(GET_MY_USER)

    return (
        <Container fluid className="menu-header">
        <Row>
          <Col xs={3}></Col>
          <Col className="menu-header_input">
            <SearchIcon />
            <InputBase placeholder='Search...' />
          </Col>
          <Col xs={3} className="menu-header__right">
            <div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            {u ?(
              <img src={u.profile.avatar} alt="avatar" />
            ):(
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU" alt="avatar" />
            )}
              
            </div>
            
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              style={{marginTop:"40px"}}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              {user ?(          
                <MenuItem onClick={logout}>logout</MenuItem>            
              ):(
                <Link to={"/login"} className="link">
                <MenuItem onClick={handleClose}>Login</MenuItem>
              </Link>
              )}
             
              
            </Menu>
            
          </Col>
        </Row>
      </Container>
    )
}

export default MenuTop
