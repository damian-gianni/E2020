const express = require("express");
const next = require("next");
const https = require("https");
const pem = require("pem");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const { HOST = "localhost", HTTPS } = process.env;
const PORT = dev ? 3000 : 80;

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      return handle(req, res);
    });
    if (HTTPS) {
      pem.createCertificate({ days: 1, selfSigned: true }, function(err, keys) {
        https
          .createServer(
            {
              key: keys.serviceKey,
              cert: keys.certificate
            },
            server
          )
          .listen(PORT, err => {
            if (err) throw err;
            console.log(`> Ready on https://localhost:${PORT}`);
          });
      });
    } else {
      server.listen(PORT, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
      });
    }
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
