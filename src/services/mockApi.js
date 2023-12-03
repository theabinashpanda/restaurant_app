const jsonServer = require('json-server');
const data = require('/Users/abinashpanda/programs/React/restaurant_app/db.json');

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

const PORT = 3001; 

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use('/api', router); 

server.listen(PORT, () => {
  console.log(`Mock API server is running at http://localhost:${PORT}`);
});
