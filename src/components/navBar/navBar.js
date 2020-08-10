import React, { useState, Fragment } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import withWidth from "@material-ui/core/withWidth";

import "./navBar.css";
import LeftMenu from "../leftMenu/leftMenu";

const NavBar = (props) => {
  const { width } = props;
  const [showMenu, setShowMenu] = useState(false);

  const handleLeftMenuToggle = (open) => (event) => {
    setShowMenu(open);
  };

  const isSmallScreen = () => {
    return width === "sm" || width === "md";
  };

  return (
    <Fragment>
      <AppBar>
        <Toolbar style={{ minHeight: 50 }}>
          <Typography className="title">GigglesWare</Typography>
          {isSmallScreen() ? (
            <div>
              <Button color="inherit">Kids</Button>
              <Button color="inherit">Classes</Button>
              <Button color="inherit">Reports</Button>
              <Button color="inherit">Instant Log</Button>
              <Button color="inherit">Attendance</Button>
              <Button color="inherit">Documents</Button>
            </div>
          ) : (
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleLeftMenuToggle(true)}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <LeftMenu
        open={showMenu}
        handleToggle={(open) => handleLeftMenuToggle(open)}
      />
    </Fragment>
  );
};

export default withWidth()(NavBar);
