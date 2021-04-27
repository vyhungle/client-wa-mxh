import React from "react";
import { useQuery } from "@apollo/react-hooks";


import { GET_MY_PRODUCTS } from "../../Graphql/query";
import Button from "@material-ui/core/Button";

function Products() {
  const { data: { getMyProducts: product } = {} } = useQuery(GET_MY_PRODUCTS);
  return (
    <div className="my-product">
      {product &&
        product.map((p) => (
          <div key={p.id} className="my-product__cart">
            <img src={p.image[0]} />
            <div>
              <h5>{p.body}</h5>
              <p>Giá: {p.price} đ</p>
              <p>Thể loại: {p.category.name}</p>
              <p>Địa chỉ: {p.address.location}</p>
              <Button className="btn-edit">edit</Button>
              <Button className="btn-delete">delete</Button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Products;
