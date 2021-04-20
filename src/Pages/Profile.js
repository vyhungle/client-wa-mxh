import React from "react";
import { Row, Col, Container } from "react-bootstrap";


import MenuTop from "../Components/Menu/menuTop";
import ListFriend from "../Components/Home/friendList";
import MenuLeft from "../Components/Menu/navLeft";
import Posts from "../Components/Profile/posts";
import ListUser from "../Components/Home/loadUser";
import Infor from "../Components/Profile/infor";

function Profile(props) {
  return (
    <div>
      <MenuTop />
      <Container fluid className="layout">
        <Row>
          <Col xs={3} className="layout__left">
            <MenuLeft />
          </Col>

          <Col className="layout__content">
            <div className="profile">
              <Infor username={props.match.params.username}/>
              <div className="profile__content">
                <Posts/>
              </div>
            </div>
          </Col>
          <Col xs={3} className="layout__right">
            <Row>
              <Col xs={10}>
                <ListUser />
                <ListFriend />
              </Col>
              <Col xs={2}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
