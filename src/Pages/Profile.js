import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import MenuTop from "../Components/Menu/menuTop";
import ListFriend from "../Components/Home/friendList";
import MenuLeft from "../Components/Menu/navLeft";
import Posts from "../Components/Profile/posts";
import ListUser from "../Components/Home/loadUser";
import Infor from "../Components/Profile/infor";
import Button from "@material-ui/core/Button";
import Products from "../Components/Profile/products";

function Profile(props) {
  const [tab, setTab] = React.useState(0);
  const handlePostTab = () => {
    setTab(0);
  };
  const handleProductTab = () => {
    setTab(1);
  };

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
              <Infor username={props.match.params.username} />
              <div className="profile__content">
                <div className="profile__content--nav">
                  <Button onClick={() => handlePostTab()}>profile</Button>
                  <Button onClick={() => handleProductTab()}>products</Button>
                </div>
                {tab === 0 ? (
                  <Posts username={props.match.params.username} />
                ) : (
                  <Products />
                )}
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
