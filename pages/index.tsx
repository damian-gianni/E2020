// import Link from "next/link";
import Splash from "../components/splash";
import { AppBar, Toolbar, CssBaseline } from "@material-ui/core";

export default () => (
  <div>
    <CssBaseline />
    <AppBar position="static">
      <Toolbar>Estudiantes 2020</Toolbar>
    </AppBar>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img
        src="https://estudiantes2020.sfo2.digitaloceanspaces.com/logo-app.png"
        style={{ width: "50%" }}
      />
      <div>
        <h2>PROXIMAMENTE...</h2>
      </div>
    </div>
    {/* <Link href="/about">
      <span>about</span>
    </Link> */}
    <Splash />
  </div>
);
