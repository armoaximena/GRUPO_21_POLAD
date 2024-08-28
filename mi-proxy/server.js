const cors_anywhere = require('cors-anywhere');

const host = '127.0.0.1';
const port = 8080;

cors_anywhere.createServer({
  originWhitelist: [], // Permite todos los orígenes
}).listen(port, host, () => {
  console.log(`CORS Anywhere servidor corriendo en http://${host}:${port}`);
});