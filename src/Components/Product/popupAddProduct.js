import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { Form, Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Input } from '@material-ui/core';

import { CREATE_PRODUCT } from "../../Graphql/mutation";
import { categories, addresses } from "../../util/data";

var errors = {};
function PopupAddProduct() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  var Image = [];

  function uploadImage(files, formProps) {
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      randerImage(file, formProps);
    }
  }
  function randerImage(file, formProps) {
    var reader = new FileReader();
    reader.onloadend = function () {
      Image.push(reader.result);
      formProps.setFieldValue("image", Image);
    };
    reader.readAsDataURL(file);
  }
  const [
    createProduct,
    { loading, data: { createProduct: product } = {} },
  ] = useMutation(CREATE_PRODUCT);
  return (
    <>
      <Button className="product__top--add" onClick={handleClick}>
        Add Product
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="popup-product"
      >
        <div className="popup-product__box">
          <h5>ADD PRODUCT</h5>
          <Formik
            initialValues={{
              image: [],
              price: "",
              address: "Thành phố Hà Nội",
              body: "",
              category: "Xe cộ",
              describe: "",
            }}
            onSubmit={(values) => {
              createProduct({
                variables: values,
                update(proxy, { data: { createProduct: product } = {} }) {
                  errors = {};
                  if (product.error) {
                    for (var i = 0; i < product.error.length; i++) {
                      if (product.error[i].field === "image") {
                        errors.image = product.error[i].message;
                      } else if (product.error[i].field === "price") {
                        errors.price = product.error[i].message;
                      } else if (product.error[i].field === "address") {
                        errors.address = product.error[i].message;
                      } else if (product.error[i].field === "body") {
                        errors.body = product.error[i].message;
                      } else errors.category = product.error[i].message;
                    }
                  }
                },
              });
            }}
          >
            {(formProps) => (
              <Form>
                {errors.body && <p>{errors.body}</p>}
                <input
                  id="body"
                  name="body"
                  type="text"
                  value={formProps.values.body}
                  onChange={formProps.handleChange}
                  placeholder="Tên sản phẩm"
                />

                <input
                  multiple
                  id="image"
                  type="file"
                  onChange={(e) => {
                    uploadImage(e.target.files, formProps);
                  }}
                  style={{ display: "none" }}
                />
                {errors.image && <p>{errors.image}</p>}
                <div className="popup-product__box--image">
                  {Image ? (
                    <>
                      {Image.map((i, index) => (
                        <img src={i} alt="img product" key={index} />
                      ))}
                    </>
                  ) : (
                    ""
                  )}
                  <div>
                    <label htmlFor="image">
                      <AddAPhotoIcon />
                    </label>
                  </div>
                </div>
                <select
                  name="address"
                  id="address"
                  value={formProps.values.address}
                  onChange={formProps.handleChange}
                >
                  {addresses.map((a,index) => (
                    <option value={a} key={index}>{a}</option>
                  ))}
                </select>

                <select
                  name="category"
                  id="category"
                  value={formProps.values.category}
                  onChange={formProps.handleChange}
                >
                  {categories.map((c,index) => (
                    <option value={c} key={index}>{c}</option>
                  ))}
                </select>
                {errors.price && <p>{errors.price}</p>}
                <input
                  id="price"
                  type="number"
                  value={formProps.values.price}
                  onChange={formProps.handleChange}
                  placeholder="Giá"
                />
                <textarea
                  type="textarea"
                  id="describe"
                  placeholder="Mô tả sản phẩm"
                  value={formProps.values.describe}
                  onChange={formProps.handleChange}
                />
                {loading ? (
                  <button type="submit">
                    <CircularProgress color="primary" />
                  </button>
                ) : (
                  <button type="submit" >Create Product</button>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </Menu>
    </>
  );
}

export default PopupAddProduct;
