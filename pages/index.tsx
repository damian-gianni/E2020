import Head from "next/head";
import styled from "styled-components";
import Splash from "../components/ui/splash";
import { CssBaseline } from "@material-ui/core";
import Menu from "../components/Menu";

export default () => {
  const ImgCommingSoon = styled.img`
    width: 50%;
    @media (min-width: 1024px) {
      width: 20%;
    }
  `;

  return (
    <div>
      <Head>
        <title>Estudiantes 2020</title>
      </Head>
      <CssBaseline />
      <Menu />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <ImgCommingSoon src="https://estudiantes2020.sfo2.digitaloceanspaces.com/logo-app.png" />
        <div>
          <h2>PROXIMAMENTE...</h2>
        </div>
      </div>
      <Splash />
    </div>
  );
};
