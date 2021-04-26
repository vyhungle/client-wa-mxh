import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MenuTop from "../Components/Menu/menuTop";
import { GET_PRODUCTS } from "../Graphql/query";
import PopupAddProduct from "../Components/Product/popupAddProduct";
import MenuFillter from "../Components/Product/menuFillter";

function Product(props) {
  var category = props.match.params.categories;
  var address = props.match.params.address;
  var sort = props.match.params.type;
  if (category === "all") category = "";
  if (address === "all") address = "";
  console.log(sort);
  const { loading, data: { getProducts: product } = {} } = useQuery(
    GET_PRODUCTS,
    {
      variables: {
        category,
        address,
        sort: parseInt(sort),
      },
      pollInterval: 500,
    }
  );

  return (
    <div>
      <MenuTop />
      <Container fluid className="layout">
        <Row>
          <Col xs={3} className="layout__left">
            <MenuFillter />
          </Col>

          <Col className="layout__content">
            <div className="product__top">
              <h5>ALL PRODUCT</h5>
              <div>
                <span>Sắp xếp theo: </span>
                <Link
                  to={`/product/${props.match.params.categories}/${props.match.params.address}/1`}
                  className="link"
                >
                 <FontAwesomeIcon icon="sort-amount-up"/> Thấp đến cao
                </Link>
                <Link
                  to={`/product/${props.match.params.categories}/${props.match.params.address}/-1`}
                  className="link"
                >
                 <FontAwesomeIcon icon="sort-amount-down"/> Cao đế thấp
                </Link>
              </div>
              <PopupAddProduct />
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
                    <div className="product__cart">
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
