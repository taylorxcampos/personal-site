import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./navbar.css";

const ButtonAppBar = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        {/* <Typography variant="h6">Hi, I'm Taylor</Typography> */}
        <div className="nav-list">
          <Button color="inherit" className="nav-items">
            About Me
          </Button>
          <Button color="inherit" className="nav-items">
            Portfolio
          </Button>
          <Button color="inherit" className="nav-items">
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

export default ButtonAppBar;
