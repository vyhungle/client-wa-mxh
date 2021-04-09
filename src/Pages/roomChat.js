import React from 'react'
import { Row, Col, Container } from "react-bootstrap";

import MenuLeft from "../Components/navLeft";
import MenuTop from "../Components/menuTop";
import ListChat from "../Components/listChat";
import ContentChat from "../Components/contentChat";

function RoomChat(props) {
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
                          <Col>
                            <ContentChat id={props.match.params.id}/>
                          </Col>
                      </Row>
                    </Col>
                    <Col xs={1}></Col>
                   
                </Row>
            </Container>
        </div>

    )
}

export default RoomChat
