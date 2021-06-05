const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
    // todo replace 'localhost' in production to docker img name to test this
    if (process.env.NODE_ENV === 'production') {
        app.use(
            "/api/login",
            createProxyMiddleware({
                target: "http://localhost:8080/",
            })
        )
        app.use(
            "/api/users/register",
            createProxyMiddleware({
                target: "http://localhost:8080/",
            })
        );
        app.use(
            "/api/users",
            createProxyMiddleware({
                target: "http://localhost:8080/",
            })
        );
    } else {
        app.use(
            "/api/login",
            createProxyMiddleware({
                target: "http://localhost:8080/",
            })
        );
        app.use(
            "/api/users/register",
            createProxyMiddleware({
                target: "http://localhost:8080/",
            })
        );
        app.use(
            "/api/users",
            createProxyMiddleware({
                target: "http://localhost:8080/",
            })
        );
    }

};