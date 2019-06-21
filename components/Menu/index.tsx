import { useState } from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavDrawer from "./NavDrawer";

export default () => {
  const [drawerOpened, openDrawer] = useState(false);

  const toggleDrawer = (drawerToggle) => {
    openDrawer(drawerToggle);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="caption" color="inherit">
            Estudiantes 2020
          </Typography>
        </Toolbar>
      </AppBar>

      <NavDrawer drawerOpened={drawerOpened} toggleDrawer={toggleDrawer} />
    </div>
  );
};
