const withPlugins = require("next-compose-plugins");
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
  gcm_sender_id: "482941778795",
  background_color: "#ffffff",
  start_url: "https://estudiantes2020.com.ar",
  display: "standalone",
  orientation: "portrait"
};

// ToDo: Comento el withOffline porque no funciona sino
module.exports = withPlugins(
  [withOffline],
  [
    withManifest,
    {
      manifest: {
        ...manifestConfig
      }
    }
  ]
);
// module.exports = withPlugins([
//   [
//     withManifest,
//     {
//       manifest: {
//         ...manifestConfig
//       }
//     }
//   ],
//   [
//     withOffline,
//     {
//       generateSw: true,
//       workboxOpts: {
//         importScripts: ["https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js"]
//       }
//     }
//   ]
// ]);
