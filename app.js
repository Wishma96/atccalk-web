/*
 * Plesk/Node.js entry point for this Next.js app.
 * Configure Plesk "Application Startup File" to: app.js
 */

const http = require('http');
const url = require('url');
const next = require('next');

const port = Number.parseInt(process.env.PORT || '3000', 10);
const hostname = process.env.HOSTNAME || '0.0.0.0';
// This entrypoint is intended for production hosting (e.g., Plesk).
// Use `npm run dev` for local development.
const dev = false;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = http.createServer((req, res) => {
      const parsedUrl = url.parse(req.url, true);
      handle(req, res, parsedUrl);
    });

    server.listen(port, hostname, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://${hostname}:${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to start Next.js server:', err);
    process.exit(1);
  });
