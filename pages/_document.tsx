import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import Manifest from "next-manifest/manifest";
import { ServerStyleSheets } from "@material-ui/styles";
import { ServerStyleSheet } from "styled-components";
import flush from "styled-jsx/server";
import theme from "../src/theme";

class MyDocument extends Document {
  render() {
    return (
      <html lang="es">
        <Head>
          <Manifest />
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="Sitio web oficial de la agrupación de socios Estudiantes2020 del Club Atlético Estudiantes"
          />
          <meta
            name="keywords"
            content="Estudiantes2020, Club Atlético Estudiantes, EstudiantesBA, Estudiantes buenos aires, estudiantes de caseros, caseros"
          />
          <meta name="author" content="Damian Gianni" />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://estudiantes2020.sfo2.digitaloceanspaces.com/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://estudiantes2020.sfo2.digitaloceanspaces.com/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://estudiantes2020.sfo2.digitaloceanspaces.com/favicon/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="https://estudiantes2020.sfo2.digitaloceanspaces.com/favicon/safari-pinned-tab.svg"
            color="#3f3f3f"
          />
          <meta name="msapplication-TileColor" content="#dcdcdc" />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body
          style={{
            backgroundImage:
              "url(https://estudiantes2020.sfo2.digitaloceanspaces.com/bg-repeat_128x128.jpg)"
          }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheet = new ServerStyleSheet();
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props =>
          sheet.collectStyles(sheets.collect(<App {...props} />))
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheets.getStyleElement()}
          {sheet.getStyleElement()}
          {flush() || null}
        </>
      )
    };
  } finally {
    sheet.seal();
  }
};

export default MyDocument;
