import http from 'http';
import { RoutesHandler } from './core/RoutesHandler.js';
import { router } from './routes/main.js';

const routesHandler = new RoutesHandler(router);
console.log(JSON.stringify(routesHandler));

http.createServer((req, res) => {
    routesHandler.handleRequest(req, res);
}).listen(3000);
