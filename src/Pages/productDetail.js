import React,{useState} from "react";
import { useQuery } from "@apollo/react-hooks";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { Link } from "react-router-dom";

import MenuTop from "../Components/Menu/menuTop";
import MenuLeft from "../Components/Menu/navLeft";
import { GET_PRODUCT } from "../Graphql/query";


function ProductDetail(props) {
  const [index,setIndex]=useState(0)
  function handleTab(index){
    setIndex(index)
  }  
  var productId = props.match.params.id;
  const { data: { getProduct: product } = {} } = useQuery(GET_PRODUCT, {
    variables: { productId },
  });
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
                  <div className="product-detail__content--left">
                    <img className="image-main" alt="product" src={product.image[index]} />
                    <div className="image-list">
                    {product.image.map((i,index)=>(
                      <img  alt="product" src={i} key={index} onClick={()=>handleTab(index)}/>
                    ))}
                    </div>
                  </div>

                  <div className="product-detail__content--right">
                    <h5>{product.body}</h5>
                    <p>
                      {product.price}{" "}
                      <span style={{ textDecoration: "underline" }}>đ</span>
                    </p>
                    <p>{product.category.name}</p>
                    <p>{product.address.location}</p>
                    <Button>
                      <ChatBubbleOutlineIcon style={{ marginRight: "5px" }} />
                      <span>Nhắn tin</span>
                    </Button>
                    {product.describe && (
                      <div className="product-detail__describe">
                        <h6>MÔ TẢ SẢN PHẨM</h6>
                        <p>{product.describe}</p>
                      </div>
                    )}
                    <h6>THÔNG TIN VỀ NGƯỜI BÁN</h6>
                    <div>
                      <Link
                        className="link"
                        to={`/profile/${product.seller.username}`}
                      >
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
