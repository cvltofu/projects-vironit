const http = require('http');
const PORT = process.env.PORT || 5000;
const EventEmitter = require('events');

const emitter = new EventEmitter();

class Router {
    constructor() {
        this.endpoints = {};
    }

    request(method = 'GET', path, handler) {
        if (!this.endpoints[path]) {
            this.endpoints[path] = {};
        }

        // /users [GET, POST, PUT]
        // /posts [GET, POST, PUT, DELETE]
        const endpoint = this.endpoints[path];

        if (endpoint[method]) {
            throw new Error(`[${method}] по адресу ${path} уже существует`);
        }

        endpoint[method] = handler;
        emitter.on(`[${path}]:[${method}]`, (req, res) => {
            handler(req, res);
        });
    }

    get(path, handler) {
        this.request('GET', path, handler);
    }

    post(path, handler) {
        this.request('POST', path, handler);
    }

    put(path, handler) {
        this.request('PUT', path, handler);
    }

    delete(path, handler) {
        this.request('DELETE', path, handler);
    }
}

const router = new Router();

router.get('/users', (req, res) => {
    res.end('YOU SEND REQUEST TO /USERS');
});

router.get('/posts', (req, res) => {
    res.end('YOU SEND REQUEST TO /POSTS');
});

const server = http.createServer((req, res) => {
    emitter.emit(`[${req.url}]:[${req.method}]`, req, res);
    // res.end(req.url);
});

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
