const assert = require('node:assert/strict');
const http = require('node:http');
const test = require('node:test');
const { createServer } = require('../server');

function request(port, pathname) {
  return new Promise((resolve, reject) => {
    http.get({ host: '127.0.0.1', port, path: pathname }, (response) => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', (chunk) => { body += chunk; });
      response.on('end', () => resolve({ status: response.statusCode, body }));
    }).on('error', reject);
  });
}

test('serve a aplicação e bloqueia caminhos fora de public', async (testContext) => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  testContext.after(() => server.close());
  const { port } = server.address();

  const home = await request(port, '/');
  assert.equal(home.status, 200);
  assert.match(home.body, /Estudos TCE-GO/);

  const blocked = await request(port, '/..%2Fserver.js');
  assert.equal(blocked.status, 403);
});
