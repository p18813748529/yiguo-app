const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    // 在此处配置正向代理
    app.use(proxy('/api', {
        target: "https://b2capigateway.yiguo.com",
        changeOrigin: true
    }));
    app.use(proxy('/Home', {
        target: "http://article.m.yiguo.com",
        changeOrigin: true
    }));
    app.use(proxy('/Category', {
        target: "http://article.m.yiguo.com",
        changeOrigin: true
    }))
};