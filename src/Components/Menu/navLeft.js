import React, { useContext } from "react";

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

            <Link to="/product/all/all/0" className="link">
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

       {/*      <Link to="/friend" className="link">
              <ListItem button>
                <FontAwesomeIcon icon="user-friends" />
                <span>Friends</span>
              </ListItem>
            </Link> */}

            <Link to="/group" className="link">
              <ListItem button>
                <FontAwesomeIcon icon="users" />
                <span>Groups</span>
              </ListItem>
            </Link>
          </List>
        </Col>
      </Row>
    </div>
  );
}

export default NavLeft;
