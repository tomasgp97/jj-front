const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
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
    app.use(
        "/api/followers",
        createProxyMiddleware({
            target: "http://localhost:8080/",
        })
    );
    app.use(
        "/api/likes",
        createProxyMiddleware({
            target: "http://localhost:8082",
        })
    );
    app.use(
        "/api/posts",
        createProxyMiddleware({
            target: "http://localhost:8082",
        })
    );

    app.use(
        "/api/messages",
        createProxyMiddleware({target: "http://localhost:3001"})
    )
};