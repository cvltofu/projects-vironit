export class Router {
    routes = {};
    /*
    {
        'users': {'GET': callback1, 'POST': callback2},
        'goods': {"list": {'GET': callback1, 'POST': callback2}},
        'categories': {'GET': callback1, 'POST': callback2},
    }
    */

    use(path, router) {
        this.routes[path] = router.routes;
    }

    get(path, callback) {
        this.createRoute(path, 'GET', callback);
    }

    post(path, callback) {
        this.createRoute(path, 'POST', callback);
    }

    createRoute(path, method, callback) {
        this.routes[path] = this.routes[path] || {};
        this.routes[path][method] = callback;
    }
}
