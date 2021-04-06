import React, { useState,useContext } from 'react';

import { Container, Row, Col } from "react-bootstrap";

import MenuTop from "../Components/menuTop";
import ListFriend from "../Components/friendList";
import MenuLeft from "../Components/navLeft";
import Posts from "../Components/posts";
import ListUser from "../Components/loadUser";







export default function Home() {


  return (
    <div>
     
      <MenuTop/>
      <Container fluid className="layout">
        <Row>
          <Col xs={3} className="layout__left">
            <MenuLeft />
          </Col>

          <Col className="layout__content">
            <Posts />
          </Col>
          <Col xs={3} className="layout__right">
                
                <Row>
                  <Col xs={10}>
                  <ListUser/>                          
                  <ListFriend/>                   
                  </Col>
                  <Col xs={2}></Col>
                </Row>
          </Col>
        </Row>
      </Container>
    </div>

  );
}
