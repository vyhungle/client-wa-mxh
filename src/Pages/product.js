import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useQuery } from "@apollo/react-hooks";

import MenuTop from "../Components/Menu/menuTop";
import MenuLeft from "../Components/Menu/navLeft";
import { GET_PRODUCTS } from "../Graphql/query";

function Product() {
    const {loading, data:{getProducts:product}={}}=useQuery(GET_PRODUCTS,{pollInterval:500})

  return (
    <div>
      <MenuTop />
      <Container fluid className="layout">
        <Row>
          <Col xs={3} className="layout__left">
            <MenuLeft />
          </Col>

          <Col className="layout__content">
            <div className="product">
                {product && product.map((p)=>(
                    <div key={p.id} className="product__cart">
                        <img src={p.image}/>
                        <div className="product__cart--body">
                            <h5>{p.price} <span>đ</span></h5>
                            <p>{p.body}</p>
                            <p>{p.address}</p>
                        </div>
                    </div>
                ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
