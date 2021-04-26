import React from "react";
import Button from "@material-ui/core/Button";
import FilterListIcon from "@material-ui/icons/FilterList";
import Menu from '@material-ui/core/Menu';

function PopupFillter() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <div className="filter-product">
      <Button className="product__top--filter" onClick={handleClick}>
        <FilterListIcon />
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="filter-product__box"
      >
        <div className="content">a</div>
      </Menu>
    </div>
  );
}

export default PopupFillter;
