const http = require('http');
const kelp = require('kelp');
const proxy = require('kelp-proxy');
const serve = require('kelp-static');
const logger = require('kelp-logger');

const app = kelp();

app.use(logger);
app.use(serve('.'));
app.use(proxy({
  path: '/api',
  proxy: 'https://api.lsong.me', // api-server
}));

http.createServer(app).listen(8000);