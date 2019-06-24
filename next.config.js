const withTypescript = require("@zeit/next-typescript");
const withOffline = require("next-offline");
const withManifest = require("next-manifest");

const manifestConfig = {
  name: "Estudiantes 2020",
  short_name: "E2020",
  icons: [
    {
      src:
        "https://estudiantes2020.sfo2.digitaloceanspaces.com/favicon/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src:
        "https://estudiantes2020.sfo2.digitaloceanspaces.com/favicon/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png"
    },
    {
      src:
        "https://estudiantes2020.sfo2.digitaloceanspaces.com/favicon/apple-touch-icon-72x72.png",
      sizes: "72x72",
      type: "image/png"
    },
    {
      src:
        "https://estudiantes2020.sfo2.digitaloceanspaces.com/favicon/apple-touch-icon-57x57.png",
      sizes: "57x57",
      type: "image/png"
    },
    {
      src:
        "https://estudiantes2020.sfo2.digitaloceanspaces.com/favicon/apple-touch-icon-144x144.png",
      sizes: "144x144",
      type: "image/png"
    },
    {
      src:
        "https://estudiantes2020.sfo2.digitaloceanspaces.com/favicon/apple-touch-icon-114x114.png",
      sizes: "114x114",
      type: "image/png"
    },
    {
      src:
        "https://estudiantes2020.sfo2.digitaloceanspaces.com/favicon/apple-touch-icon-120x120.png",
      sizes: "120x120",
      type: "image/png"
    },
    {
      src:
        "https://estudiantes2020.sfo2.digitaloceanspaces.com/favicon/apple-touch-icon-180x180.png",
      sizes: "180x180",
      type: "image/png"
    },
    {
      src:
        "https://estudiantes2020.sfo2.digitaloceanspaces.com/favicon/apple-touch-icon-60x60.png",
      sizes: "60x60",
      type: "image/png"
    },
    {
      src:
        "https://estudiantes2020.sfo2.digitaloceanspaces.com/favicon/mstile-150x150.png",
      sizes: "150x150",
      type: "image/png"
    },
    {
      src:
        "https://estudiantes2020.sfo2.digitaloceanspaces.com/favicon/apple-touch-icon-76x76.png",
      sizes: "76x76",
      type: "image/png"
    }
  ],
  theme_color: "#ffffff",
  background_color: "#ffffff",
  start_url: "https://estudiantes2020.com.ar",
  display: "standalone",
  orientation: "landscape"
};
module.exports = withOffline(
  withTypescript(
    withManifest({
      manifest: {
        ...manifestConfig
      }
    })
  )
);
