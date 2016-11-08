(() => {

	'use strict';

	angular.module('app')
		.factory('FApi', function($http)
		{



			// ------------------------------------------------------------
			// Name: getCurrentWeather
			// Abstract: Get current weather from API
			// ------------------------------------------------------------
			const getCurrentWeather = function(city)
			{
				// let city = 'Cincinnati';

				let call = $http({
					method: 'GET',
					url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7cf16558d759d14815306832bd7341e2&units=imperial`,
				})

				return call;
			}



			// ------------------------------------------------------------
			// Name: getForecastWeather
			// Abstract: Get forecast weather from API
			// ------------------------------------------------------------
			const getForecastWeather = function(city)
			{
				// let city = 'Cincinnati';

				let call = $http({
					method: 'GET',
					url: `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&APPID=7cf16558d759d14815306832bd7341e2&units=imperial`,
				})

				return call;
			}



			return {
				getCurrentWeather,
				getForecastWeather,
			}
		})
})();
