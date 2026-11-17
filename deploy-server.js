const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const ZIP_FILE = path.join(__dirname, 'dyams-deploy.zip');

if (!fs.existsSync(ZIP_FILE)) {
  console.error('Error: dyams-deploy.zip not found.');
  process.exit(1);
}

const server = http.createServer((req, res) => {
  if (req.url === '/dyams-deploy.zip') {
    const stat = fs.statSync(ZIP_FILE);
    res.writeHead(200, {
      'Content-Type': 'application/zip',
      'Content-Length': stat.size,
      'Content-Disposition': 'attachment; filename="dyams-deploy.zip"'
    });
    fs.createReadStream(ZIP_FILE).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`File server running at http://localhost:${PORT}/dyams-deploy.zip`);
});
