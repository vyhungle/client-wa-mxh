import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";

import MenuTop from "../Components/Menu/menuTop";
import MenuLeft from "../Components/Menu/navLeft";
import { GET_PRODUCTS } from "../Graphql/query";
import PopupAddProduct from "../Components/Product/popupAddProduct";
import PopupFillter from "../Components/Product/popupFillter";
import MenuFillter from "../Components/Product/menuFillter";

function Product() {
  const { loading, data: { getProducts: product } = {} } = useQuery(
    GET_PRODUCTS,
    {
      pollInterval: 500,
    }
  );

  return (
    <div>
      <MenuTop />
      <Container fluid className="layout">
        <Row>
          <Col xs={3} className="layout__left" >
            <MenuFillter/>
         
          </Col>

          <Col className="layout__content">
            <div className="product__top">
              <h5>ALL PRODUCT</h5>
              <PopupAddProduct />
              <PopupFillter/>
            </div>
            <div className="product">
              {product &&
                product.map((p) => (
                  <Link
                     key={p.id}
                    className="link"
                    to={`/product/${p.id}`}
                    className="link"
                  >
                    <div  className="product__cart">
                      <img src={p.image[0]} />
                      <div className="product__cart--body">
                        <h5>
                          {p.price} <span>đ</span>
                        </h5>
                        <p style={{ fontWeight: "700" }}>{p.body}</p>
                        <p>{p.address.location}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
