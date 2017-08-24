var Arrow = require('arrow');
var request = require('request');
var request = require('request');

var  APPID = '77919428d21d3c658dcb3fb150575a70';
var TestAPI = Arrow.API.extend({
	group: 'fdforecast',
	path: '/api/fdforecast/:city',
	method: 'GET',
	description: 'Open Weather Map API',
	after: 'post_fdf',
	parameters: {
		city: { description: 'city name' }
	},
	action: function (req, resp, next) {
		console.log("Processing fetch request on the server...");
		console.log(req.params.city);
		var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q={" + req.params.city + "}&cnt=5&APPID=" + APPID;
		var options = {
			"url": url,
			"method": "GET",
			"bodyParams": {},
			"gzip": true,
			"json": true
		};
		request(options, function (err, response, body) {
			resp.send(body);
			next();
		});

	}
});

module.exports = TestAPI;
