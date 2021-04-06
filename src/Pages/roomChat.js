import React from 'react'
import { Row, Col, Container } from "react-bootstrap";

import MenuLeft from "../Components/navLeft";
import MenuTop from "../Components/menuTop";
import ListChat from "../Components/listChat";

function RoomChat() {
    return (
        <div>
            <MenuTop />
            <Container fluid className="layout-chat">
                <Row>
                    <Col xs={3} className="layout-chat__left"><MenuLeft /> </Col>
                    <Col className="layout-chat__content">
                      <Row>
                          <Col xs={4}>
                              <ListChat/>
                          </Col>
                          <Col ></Col>
                      </Row>
                    </Col>
                   
                </Row>
            </Container>
        </div>

    )
}

export default RoomChat
