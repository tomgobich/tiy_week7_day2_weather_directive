'use strict';

(function () {

	'use strict';

	angular.module('app').factory('FApi', function ($http) {

		// ------------------------------------------------------------
		// Name: getCurrentWeather
		// Abstract: Get current weather from API
		// ------------------------------------------------------------
		var getCurrentWeather = function getCurrentWeather(city) {
			var call = $http({
				method: 'GET',
				url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=7cf16558d759d14815306832bd7341e2&units=imperial'
			});

			return call;
		};

		// ------------------------------------------------------------
		// Name: getForecastWeather
		// Abstract: Get forecast weather from API
		// ------------------------------------------------------------
		var getForecastWeather = function getForecastWeather(city) {
			var call = $http({
				method: 'GET',
				url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&cnt=5&APPID=7cf16558d759d14815306832bd7341e2&units=imperial'
			});

			return call;
		};

		return {
			getCurrentWeather: getCurrentWeather,
			getForecastWeather: getForecastWeather
		};
	});
})();