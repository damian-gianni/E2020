import { useState } from "react";
import { IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavDrawer from "./NavDrawer";
import { CustomAppBar, IconEstudiantes } from "./Menu.styled";
import SocialNetworks from "./SocialNetworks";

export default () => {
  const [drawerOpened, openDrawer] = useState(false);

  const toggleDrawer = drawerToggle => {
    openDrawer(drawerToggle);
  };

  return (
    <div className="App">
      <CustomAppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SocialNetworks />
          <IconEstudiantes />
        </Toolbar>
      </CustomAppBar>

      <NavDrawer drawerOpened={drawerOpened} toggleDrawer={toggleDrawer} />
    </div>
  );
};
