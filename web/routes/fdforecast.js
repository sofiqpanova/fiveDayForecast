var Arrow = require('arrow');

var fdfRouter = Arrow.Router.extend({
    name: 'fdforecast',
    path: '/fdforecast',
    method: 'GET',
    description: 'get some info',
    action: function (req, resp, next) {
        resp.render('fdforecast');
    }
});

module.exports = fdfRouter;