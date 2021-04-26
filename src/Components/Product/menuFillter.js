import React from 'react'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function MenuFillter() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

    return (
        <div className="menu-filter">
            <h6>FILLTER</h6>    
            <List className="menu__listIcon">
              <ListItem button 
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}>
                <FontAwesomeIcon icon="car" />
                <span>Xe cộ</span>
              </ListItem>

              <ListItem button 
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}>
                <FontAwesomeIcon icon="hammer" />
                <span>Dụng cụ sửa chữa</span>
              </ListItem>

              <ListItem button 
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}>
                <FontAwesomeIcon icon="heart" />
                <span>Gia đình</span>
              </ListItem>

              <ListItem button 
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}>
                <FontAwesomeIcon icon="gamepad" />
                <span>Giải trí</span>
              </ListItem>

              <ListItem button 
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}>
                <FontAwesomeIcon icon="toolbox" />
                <span>Làm vườn</span>
              </ListItem>

              <ListItem button 
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}>
                <FontAwesomeIcon icon="guitar" />
                <span>Nhạc cụ</span>
              </ListItem>

              <ListItem button 
              selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6)}>
                <FontAwesomeIcon icon="tag" />
                <span>Rao vặt</span>
              </ListItem>

              <ListItem button 
              selected={selectedIndex === 7}
              onClick={(event) => handleListItemClick(event, 7)}>
                <FontAwesomeIcon icon="volleyball-ball" />
                <span>Sản phẩm thể thao</span>
              </ListItem>

              <ListItem button 
              selected={selectedIndex === 8}
              onClick={(event) => handleListItemClick(event, 8)}>
                <FontAwesomeIcon icon="file-invoice-dollar" />
                <span>Tài sản cho thuê</span>
              </ListItem>

              <ListItem button 
              selected={selectedIndex === 9}
              onClick={(event) => handleListItemClick(event, 9)}>
                <FontAwesomeIcon icon="house-user" />
                <span>Bán nhà</span>
              </ListItem>

              <ListItem button 
              selected={selectedIndex === 10}
              onClick={(event) => handleListItemClick(event, 10)}>
                <FontAwesomeIcon icon="dog" />
                <span>Đồ dùng cho thú cưng</span>
              </ListItem>

              <ListItem button 
              selected={selectedIndex === 11}
              onClick={(event) => handleListItemClick(event, 11)}>
                <FontAwesomeIcon icon="tshirt" />
                <span>Đồ may mặc</span>
              </ListItem>

              <ListItem button  
              selected={selectedIndex === 12}
              onClick={(event) => handleListItemClick(event, 12)}>
                <FontAwesomeIcon icon="tv" />
                <span>Đồ điện tử</span>
              </ListItem>
       
            
          </List>
        </div>
    )
}

export default MenuFillter
