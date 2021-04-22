import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { Form, Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import CircularProgress from '@material-ui/core/CircularProgress';

import { CREATE_PRODUCT } from "../../Graphql/mutation";
function PopupAddProduct() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  var Image = "";
  function uploadImage(files, formProps) {
    const file = files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      Image = reader.result;
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
              image: "",
              price: "",
              address: "Thành phố Hà Nội",
              body: "",
              category: "Xe cộ",
            }}
            onSubmit={(values) => {
              console.log(values);
              createProduct({
                  variables:values
              })
            }}
          >
            {(formProps) => (
              <Form>
                <input
                  id="body"
                  type="text"
                  value={formProps.values.body}
                  onChange={formProps.handleChange}
                  placeholder="Tên sản phẩm"
                />
                <input
                  id="image"
                  type="file"                 
                  onChange={(e) => {
                    uploadImage(e.target.files, formProps);
                  }}             
                  style={{ display: "none" }}
                
                />
                <div className="popup-product__box--image">
                {Image?(<img src={Image} alt="img product"/>):(
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
                  <option value="Thành phố Hà Nội">Thành phố Hà Nội</option>
                  {/*   <option value="02">Tỉnh Hà Giang</option>
                  <option value="04">Tỉnh Cao Bằng</option>
                  <option value="06">Tỉnh Bắc Kạn</option>
                  <option value="08">Tỉnh Tuyên Quang</option>
                  <option value="10">Tỉnh Lào Cai</option>
                  <option value="11">Tỉnh Điện Biên</option>
                  <option value="12">Tỉnh Lai Châu</option>
                  <option value="14">Tỉnh Sơn La</option>
                  <option value="15">Tỉnh Yên Bái</option>
                  <option value="17">Tỉnh Hoà Bình</option>
                  <option value="19">Tỉnh Thái Nguyên</option>
                  <option value="20">Tỉnh Lạng Sơn</option>
                  <option value="22">Tỉnh Quảng Ninh</option>
                  <option value="24">Tỉnh Bắc Giang</option>
                  <option value="25">Tỉnh Phú Thọ</option>
                  <option value="26">Tỉnh Vĩnh Phúc</option>
                  <option value="27">Tỉnh Bắc Ninh</option>
                  <option value="30">Tỉnh Hải Dương</option>
                  <option value="31">Thành phố Hải Phòng</option>
                  <option value="33">Tỉnh Hưng Yên</option>
                  <option value="34">Tỉnh Thái Bình</option>
                  <option value="35">Tỉnh Hà Nam</option>
                  <option value="36">Tỉnh Nam Định</option>
                  <option value="37">Tỉnh Ninh Bình</option>
                  <option value="38">Tỉnh Thanh Hóa</option>
                  <option value="40">Tỉnh Nghệ An</option>
                  <option value="42">Tỉnh Hà Tĩnh</option>
                  <option value="44">Tỉnh Quảng Bình</option>
                  <option value="45">Tỉnh Quảng Trị</option>
                  <option value="46">Tỉnh Thừa Thiên Huế</option>
                  <option value="48">Thành phố Đà Nẵng</option>
                  <option value="49">Tỉnh Quảng Nam</option>
                  <option value="51">Tỉnh Quảng Ngãi</option>
                  <option value="52">Tỉnh Bình Định</option>
                  <option value="54">Tỉnh Phú Yên</option>
                  <option value="56">Tỉnh Khánh Hòa</option>
                  <option value="58">Tỉnh Ninh Thuận</option>
                  <option value="60">Tỉnh Bình Thuận</option>
                  <option value="62">Tỉnh Kon Tum</option>
                  <option value="64">Tỉnh Gia Lai</option>
                  <option value="66">Tỉnh Đắk Lắk</option>
                  <option value="67">Tỉnh Đắk Nông</option>
                  <option value="68">Tỉnh Lâm Đồng</option>
                  <option value="70">Tỉnh Bình Phước</option> */}
                  <option value="Tỉnh Tây Ninh">Tỉnh Tây Ninh</option>
                  <option value="Tỉnh Bình Dương">Tỉnh Bình Dương</option>
                  <option value="Tỉnh Đồng Nai">Tỉnh Đồng Nai</option>
                  <option value="Tỉnh Bà Rịa - Vũng Tàu">
                    Tỉnh Bà Rịa - Vũng Tàu
                  </option>
                  <option value="Thành phố Hồ Chí Minh">
                    Thành phố Hồ Chí Minh
                  </option>
                  <option value="Tỉnh Long An">Tỉnh Long An</option>
                  <option value="Tỉnh Tiền Giang">Tỉnh Tiền Giang</option>
                  <option value="Tỉnh Bến Tre">Tỉnh Bến Tre</option>
                  <option value="Tỉnh Trà Vinh">Tỉnh Trà Vinh</option>
                  <option value="Tỉnh Vĩnh Long">Tỉnh Vĩnh Long</option>
                  <option value="Tỉnh Đồng Tháp">Tỉnh Đồng Tháp</option>
                  <option value="Tỉnh An Giang">Tỉnh An Giang</option>
                  <option value="Tỉnh Kiên Giang">Tỉnh Kiên Giang</option>
                  <option value="Thành phố Cần Thơ">Thành phố Cần Thơ</option>
                  <option value="Tỉnh Hậu Giang">Tỉnh Hậu Giang</option>
                  <option value="Tỉnh Sóc Trăng">Tỉnh Sóc Trăng</option>
                  <option value="Tỉnh Bạc Liêu">Tỉnh Bạc Liêu</option>
                  <option value="Tỉnh Cà Mau">Tỉnh Cà Mau</option>
                </select>

                <select
                  name="category"
                  id="category"
                  value={formProps.values.category}
                  onChange={formProps.handleChange}
                >
                  <option value="Xe cộ">Xe cộ</option>
                  <option value="Tài sản cho thuê">Tài sản cho thuê</option>
                  <option value="Bán nhà">Bán nhà</option>
                  <option value="Dụng cụ sửa chữa nhà cửa">
                    Dụng cụ sửa chữa nhà cửa
                  </option>
                  <option value="Gia đình">Gia đình</option>
                  <option value="Giải trí">Giải trí</option>
                  <option value="Làm vườn & hoạt động ngoài trời">
                    Làm vườn & hoạt động ngoài trời
                  </option>
                  <option value="audi">Nhạc cụ</option>
                  <option value="Sản phẩm thể thao">Sản phẩm thể thao</option>
                  <option value="Đồ dùng cho thú cưng">
                    Đồ dùng cho thú cưng
                  </option>
                  <option value="Đồ may mặc">Đồ may mặc</option>
                  <option value="Đồ điện tử">Đồ điện tử</option>
                </select>
                <input
                  id="price"
                  type="text"
                  value={formProps.values.price}
                  onChange={formProps.handleChange}
                  placeholder="Giá"
                />
                {loading ?(<Button ><CircularProgress color="primary" /></Button>):(<Button type="submit"  onClick={handleClose}>Create Product</Button>)}
                
              </Form>
            )}
          </Formik>
        </div>
      </Menu>
    </>
  );
}

export default PopupAddProduct;
