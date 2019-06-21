// import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import Splash from "../components/ui/splash";
import { AppBar, Toolbar, CssBaseline } from "@material-ui/core";

export default () => {
  const ImgCommingSoon = styled.img`
    width: 50%;
    @media (min-width: 1024px) {
      width: 20%;
    }
  `;

  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>Estudiantes 2020</Toolbar>
      </AppBar>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <ImgCommingSoon src="https://estudiantes2020.sfo2.digitaloceanspaces.com/logo-app.png" />
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
};
