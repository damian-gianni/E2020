import { memo } from "react";
import Head from "next/head";
import { CssBaseline } from "@material-ui/core";
import Menu from "../Menu";

const WithTheme = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Estudiantes 2020 || Home</title>
      </Head>
      <CssBaseline />
      <Menu />
      {children}
    </div>
  );
};

export default memo(WithTheme);
