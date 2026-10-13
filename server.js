// Server per Railway: mostra la Sala Giochi (file statici) e reindirizza i domini secondari
// verso l'indirizzo principale. Nessuna dipendenza esterna, basta Node.
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

// Indirizzo principale del sito (si può cambiare con la variabile REDIRECT_TARGET su Railway)
const TARGET = (process.env.REDIRECT_TARGET || 'http://www.jose-margareth.com').replace(/\/+$/, '');
const TARGET_HOST = new URL(TARGET).host;

// Domini che vengono reindirizzati all'indirizzo principale.
// "josé-margareth.com" con l'accento, su internet, si scrive "xn--jos-margareth-dhb.com".
const REDIRECT_HOSTS = new Set([
  'xn--jos-margareth-dhb.com',
  'www.xn--jos-margareth-dhb.com',
  'jose-margareth.com',
]);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.mp3': 'audio/mpeg',
  '.m4a': 'audio/mp4',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.woff2': 'font/woff2',
};

// File del progetto che non devono essere scaricabili dal sito
const PRIVATE = new Set(['server.js', 'package.json', 'railway.json', '.gitignore']);

function send(res, status, body, headers = {}) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', ...headers });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const host = (req.headers.host || '').toLowerCase().replace(/:\d+$/, '');

  // 1) Reindirizzamento dei domini secondari -> http://www.jose-margareth.com
  if (REDIRECT_HOSTS.has(host) && host !== TARGET_HOST) {
    res.writeHead(301, { Location: TARGET + req.url });
    return res.end();
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return send(res, 405, 'Metodo non consentito', { Allow: 'GET, HEAD' });
  }

  // 2) File statici
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch (e) {
    return send(res, 400, 'Richiesta non valida');
  }
  if (pathname.endsWith('/')) pathname += 'index.html';

  const filePath = path.normalize(path.join(ROOT, pathname));
  const relative = path.relative(ROOT, filePath);
  if (relative.startsWith('..') || path.isAbsolute(relative) || relative.split(path.sep).some(p => p.startsWith('.')) ||
      PRIVATE.has(relative) || relative.endsWith('.md')) {
    return send(res, 404, 'Pagina non trovata');
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) return send(res, 404, 'Pagina non trovata');
    const type = MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': type,
      'Content-Length': stat.size,
      // le pagine si ricaricano sempre aggiornate, gli altri file restano in cache un'ora
      'Cache-Control': type.startsWith('text/html') ? 'no-cache' : 'public, max-age=3600',
    });
    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`Sala Giochi in ascolto sulla porta ${PORT} (indirizzo principale: ${TARGET})`);
});
