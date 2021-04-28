import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import MenuTop from "../Components/Menu/menuTop";
import ProfileContent from "../Components/Profile/profileContent";
import ListUser from "../Components/Home/loadUser";
import FriendList from "../Components/Friend/friendList";


function Profile(props) {
  const [clickUser,setClickUser]=React.useState(props.match.params.username)

  return (
    <div>
      <MenuTop />
      <Container fluid className="layout">
        <Row>
          <Col xs={3} className="layout__left  friend-box">
          <FriendList trigger={clickUser} setTrigger={setClickUser}/>
          </Col>

          <Col className="layout__content">
            <ProfileContent username={clickUser}/>
          </Col>
          <Col xs={3} className="layout__right">
            <Row>
              <Col xs={10}>
                <ListUser />               
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
