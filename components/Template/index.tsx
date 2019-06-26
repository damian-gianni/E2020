import { memo } from "react";
import Head from "next/head";
import { CssBaseline } from "@material-ui/core";
import Menu from "../Menu";
import { MainSection } from "./Template.styled";

const WithTheme = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Estudiantes 2020 || Home</title>
      </Head>
      <CssBaseline />
      <Menu />
      <MainSection>{children}</MainSection>
    </div>
  );
};

export default memo(WithTheme);
