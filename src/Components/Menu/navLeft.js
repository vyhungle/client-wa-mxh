import React,{ useContext } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { AuthContext } from "../../Context/auth";

function NavLeft() {
  var username;
  const context = useContext(AuthContext);
  context.user === null ? (username = "") : (username = context.user.username);
  return (
    <div>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10} className="menu">
          <List className="menu__listIcon">
            <Link to="/" className="link">
              <ListItem button>
                <FontAwesomeIcon icon="home" />
                <span>Home</span>
              </ListItem>
            </Link>

            <Link to={`/profile/${username}`} className="link">
              <ListItem button>
                <FontAwesomeIcon icon="id-card" />
                <span>Profile</span>
              </ListItem>
            </Link>

            <Link to="/product" className="link">
            <ListItem button>
              <FontAwesomeIcon icon="store" />
              <span>Market</span>
            </ListItem>
            </Link>
            <Link to="/chat" className="link">
              <ListItem button to="/chat">
                <FontAwesomeIcon icon="comment-dots" />
                <span>Messages</span>
              </ListItem>
            </Link>
            <ListItem button>
              <FontAwesomeIcon icon="user-friends" />
              <span>Friends</span>
            </ListItem>
            <ListItem button>
              <FontAwesomeIcon icon="users" />
              <span>Groups</span>
            </ListItem>
          </List>
        </Col>
      </Row>
    </div>
  )
}

export default NavLeft
