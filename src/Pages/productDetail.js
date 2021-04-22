import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { Link } from "react-router-dom";

import MenuTop from "../Components/Menu/menuTop";
import MenuLeft from "../Components/Menu/navLeft";
import { GET_PRODUCT } from "../Graphql/query";
function ProductDetail(props) {
  var productId = props.match.params.id;
  const { loading, data: { getProduct: product } = {} } = useQuery(
    GET_PRODUCT,
    { variables: { productId } }
  );
  return (
    <div>
      <MenuTop />
      <Container fluid className="layout">
        <Row>
          <Col xs={3} className="layout__left">
            <MenuLeft />
          </Col>

          <Col className="layout__content">
            <div className="product-detail">
              {product && (
                <div className="product-detail__content">
                  <img alt="product" src={product.image} />
                  <div>
                    <h5>{product.body}</h5>
                    <p>
                      {product.price}{" "}
                      <span style={{ textDecoration: "underline" }}>đ</span>
                    </p>
                    <p>{product.category}</p>
                    <p>{product.address}</p>
                    <Button>
                      <ChatBubbleOutlineIcon style={{ marginRight: "5px" }} />
                      <span>Nhắn tin</span>
                    </Button>
                    <h6>Thông tin về người bán</h6>
                    <div>
                      <Link className="link" to={`/profile/${product.seller.username}`}>
                        <img alt="avatar" src={product.seller.profile.avatar} />
                        <p>{product.seller.displayname}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductDetail;
