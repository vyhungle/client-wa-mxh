import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import LoadLocation from "./loadLocation";
function MenuFillter() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const [showMoreCatagories, setShowMoreCatagories] = React.useState(0);
  const handleShowMoreCategoriesClick = () => {
    setShowMoreCatagories(1);
  };

  return (
    <div className="menu-filter">
      {/*   <h6>Bộ lọc</h6>
      <LoadLocation/> */}
      <h6>Hạng mục</h6>
      <List className="menu__listIcon">
        <Link to="/product/all/all/0" className="link">
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <AllInboxIcon />
            <span>ALL</span>
          </ListItem>
        </Link>

        <Link to="/product/xe-co/all/0" className="link">
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <FontAwesomeIcon icon="car" />
            <span>Xe cộ</span>
          </ListItem>
        </Link>

        <Link to="/product/gia-dinh/all/0" className="link">
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <FontAwesomeIcon icon="heart" />
            <span>Gia đình</span>
          </ListItem>
        </Link>

        <Link to="/product/giai-tri/all/0" className="link">
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <FontAwesomeIcon icon="gamepad" />
            <span>Giải trí</span>
          </ListItem>
        </Link>

        <Link
          to="/product/lam-vuon-va-hoat-dong-ngoai-troi/all/0"
          className="link"
        ></Link>
        <ListItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <FontAwesomeIcon icon="toolbox" />
          <span>Làm vườn</span>
        </ListItem>
        {showMoreCatagories === 1 ? (
          <>
            <Link to="/product/nhac-cu/all/0" className="link">
              <ListItem
                button
                selected={selectedIndex === 5}
                onClick={(event) => handleListItemClick(event, 5)}
              >
                <FontAwesomeIcon icon="guitar" />
                <span>Nhạc cụ</span>
              </ListItem>
            </Link>

            <Link to="/product/rao-vat/all/0" className="link">
              <ListItem
                button
                selected={selectedIndex === 6}
                onClick={(event) => handleListItemClick(event, 6)}
              >
                <FontAwesomeIcon icon="tag" />
                <span>Rao vặt</span>
              </ListItem>
            </Link>

            <Link to="/product/san-pham-the-thao/all/0" className="link">
              <ListItem
                button
                selected={selectedIndex === 7}
                onClick={(event) => handleListItemClick(event, 7)}
              >
                <FontAwesomeIcon icon="volleyball-ball" />
                <span>Sản phẩm thể thao</span>
              </ListItem>
            </Link>

            <Link to="/product/tai-san-cho-thue/all/0" className="link">
              <ListItem
                button
                selected={selectedIndex === 8}
                onClick={(event) => handleListItemClick(event, 8)}
              >
                <FontAwesomeIcon icon="file-invoice-dollar" />
                <span>Tài sản cho thuê</span>
              </ListItem>
            </Link>

            <Link to="/product/ban-nha/all/0" className="link">
              <ListItem
                button
                selected={selectedIndex === 9}
                onClick={(event) => handleListItemClick(event, 9)}
              >
                <FontAwesomeIcon icon="house-user" />
                <span>Bán nhà</span>
              </ListItem>
            </Link>

            <Link to="/product/do-dung-cho-thu-cung/all/0" className="link">
              <ListItem
                button
                selected={selectedIndex === 10}
                onClick={(event) => handleListItemClick(event, 10)}
              >
                <FontAwesomeIcon icon="dog" />
                <span>Đồ dùng cho thú cưng</span>
              </ListItem>
            </Link>

            <Link to="/product/do-may-mac/all/0" className="link">
              <ListItem
                button
                selected={selectedIndex === 11}
                onClick={(event) => handleListItemClick(event, 11)}
              >
                <FontAwesomeIcon icon="tshirt" />
                <span>Đồ may mặc</span>
              </ListItem>
            </Link>

            <Link to="/product/do-dien-tu/all/0" className="link">
              <ListItem
                button
                selected={selectedIndex === 12}
                onClick={(event) => handleListItemClick(event, 12)}
              >
                <FontAwesomeIcon icon="tv" />
                <span>Đồ điện tử</span>
              </ListItem>
            </Link>

            <Link to="/product/dung-cu-sua-chua-nha-cua/all/0" className="link">
              <ListItem
                button
                selected={selectedIndex === 13}
                onClick={(event) => handleListItemClick(event, 13)}
              >
                <FontAwesomeIcon icon="hammer" />
                <span>Dụng cụ sửa chữa</span>
              </ListItem>
            </Link>
          </>
        ) : (
          ""
        )}
      </List>
      {showMoreCatagories === 0 ? (
        <Button onClick={() => handleShowMoreCategoriesClick()}>
          Show more
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}

export default MenuFillter;
