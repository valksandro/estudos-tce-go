const fs = require('node:fs/promises');
const http = require('node:http');
const path = require('node:path');

const publicDir = path.resolve(__dirname, 'docs');
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml'
};

function filePathFor(url) {
  try {
    const pathname = decodeURIComponent(new URL(url, 'http://localhost').pathname);
    const relativePath = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
    const filePath = path.resolve(publicDir, relativePath);
    return filePath.startsWith(`${publicDir}${path.sep}`) ? filePath : null;
  } catch {
    return null;
  }
}

async function serve(req, res) {
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    res.end('Método não permitido');
    return;
  }

  const filePath = filePathFor(req.url);
  if (!filePath) {
    res.writeHead(403);
    res.end('Acesso negado');
    return;
  }

  try {
    const resolvedPath = await fs.realpath(filePath);
    if (!resolvedPath.startsWith(`${publicDir}${path.sep}`)) {
      res.writeHead(403);
      res.end('Acesso negado');
      return;
    }

    const content = await fs.readFile(resolvedPath);
    res.writeHead(200, {
      'Content-Type': mimeTypes[path.extname(resolvedPath)] || 'application/octet-stream',
      'Cache-Control': 'no-store'
    });
    res.end(req.method === 'HEAD' ? undefined : content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.writeHead(404);
      res.end('Arquivo não encontrado');
      return;
    }

    res.writeHead(500);
    res.end('Erro ao carregar a aplicação');
  }
}

function createServer() {
  return http.createServer((req, res) => {
    void serve(req, res);
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  createServer().listen(port, () => {
    console.log(`Estudos TCE-GO em http://localhost:${port}`);
  });
}

module.exports = { createServer };
