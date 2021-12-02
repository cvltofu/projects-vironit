import url from 'url';

export class RoutesHandler {
    constructor(router) {
        this.routes = router.routes;
        /**
         * {
         *  'users': {
         *      'usernames': {
         *          'id': {
         *              '': {
         *                     'GET': callback
         *                  }
         *          }
         *      }
         *  }
         * }
         */
    }

    handleRequest(req, res) {
        const urlParsed = url.parse(req.url, true);
        const pathname = urlParsed.pathname.split('/');

        let route = this.getRoute(pathname);

        if (!route) {
            res.statusCode = 404;
            res.end('No such route');
            return;
        }

        const cb = route[req.method] || route[''][req.method];
        cb(req, res);
    }

    getRoute(pathname) {
        let route = this.routes;

        pathname.forEach((path, i) => {
            if (i) {
                route = route[path];
            }
        });

        return route;
    }
}
