import React, { useState,useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Context/auth";

function MenuTop() {
    const {user,logout}=useContext(AuthContext);
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
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
              <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" alt="avatar" />
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
