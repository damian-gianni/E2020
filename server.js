const { createServer } = require("http");
const { parse } = require("url");
const { join } = require("path");
const next = require("next");
const https = require("https");
const pem = require("pem");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const { HOST = "localhost", HTTPS } = process.env;
const PORT = dev ? 3000 : 3000;
const fs = require("fs");

app
  .prepare()
  .then(() => {
    if (HTTPS) {
      const options = {
        key: fs.readFileSync(
          "/etc/letsencrypt/live/estudiantes2020.com.ar/privkey.pem"
        ),
        cert: fs.readFileSync(
          "/etc/letsencrypt/live/estudiantes2020.com.ar/fullchain.pem"
        )
      };

      https
        .createServer(options, (req, res) => {
          res.writeHead(200);
          const parsedUrl = parse(req.url, true);
          const { pathname } = parsedUrl;

          // handle GET request to /service-worker.js
          if (pathname === "/service-worker.js") {
            const filePath = join(__dirname, ".next", pathname);

            app.serveStatic(req, res, filePath);
          } else {
            handle(req, res, parsedUrl);
          }
          res.end("Initialize with HTTPS\n");
        })
        .listen(PORT, err => {
          if (err) throw err;
          console.log(`> Ready on https://localhost:${PORT}`);
        });
      //  pem.createCertificate({ days: 1, selfSigned: true }, function(err, keys) {
      //   https
      //     .createServer(
      //       {
      //         key: keys.serviceKey,
      //         cert: keys.certificate
      //       },
      //       (req, res) => {
      //         const parsedUrl = parse(req.url, true);
      //         const { pathname } = parsedUrl;

      //         // handle GET request to /service-worker.js
      //         if (pathname === "/service-worker.js") {
      //           const filePath = join(__dirname, ".next", pathname);

      //           app.serveStatic(req, res, filePath);
      //         } else {
      //           handle(req, res, parsedUrl);
      //         }
      //       }
      //     )
      //     .listen(PORT, err => {
      //       if (err) throw err;
      //       console.log(`> Ready on https://localhost:${PORT}`);
      //     });
      // });
    } else {
      createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname } = parsedUrl;

        // handle GET request to /service-worker.js
        if (pathname === "/service-worker.js") {
          const filePath = join(__dirname, ".next", pathname);

          app.serveStatic(req, res, filePath);
        } else {
          handle(req, res, parsedUrl);
        }
      }).listen(PORT, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
      });
    }
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
