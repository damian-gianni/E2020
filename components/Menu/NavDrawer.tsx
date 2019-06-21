import Link from "next/link";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Divider
} from "@material-ui/core";
import { IconE2020 } from "./IconE2020";

export default ({ drawerOpened, toggleDrawer }) => {
  return (
    <Drawer
      anchor="left"
      open={drawerOpened}
      onClose={() => toggleDrawer(false)}
    >
      <div
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
        <Toolbar>
          <IconE2020 />
          <Typography variant="caption" color="inherit">
            Estudiantes 2020
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItem button key={"Home"}>
            <Link href="/about">
              <ListItemText primary={"Home"} />
            </Link>
          </ListItem>
          <ListItem button key={"Que es E2020"}>
            <ListItemText primary={"Que es E2020"} />
          </ListItem>
          <ListItem button key={"Proyectos"}>
            <ListItemText primary={"Proyectos"} />
          </ListItem>
          <ListItem button key={"Quienes somos"}>
            <ListItemText primary={"Quienes somos"} />
          </ListItem>
          <ListItem button key={"Album de Figuritas"}>
            <ListItemText primary={"Album de Figuritas"} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};
