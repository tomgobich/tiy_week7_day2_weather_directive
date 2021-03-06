(() => {

	'use strict';

	angular
	.module('app', ['ui.router'])
	.directive('currentWeather', function (FApi, FWeather)
	{
		return {
			restrict: 'E',
			templateUrl:"partials/current-weather.html",
			scope: {
	            location: '@'
	        },
			link: function (vm, element, attrs)
			{
				// Get current weather data from API
				let weatherCall = FApi.getCurrentWeather(attrs.location);

				// After API returns...
				weatherCall.then(function(weatherData)
				{
					// Focus on needed data
					vm.weather = weatherData.data;

					// Get condition icon based off API condition code
					vm.conditionIcon = FWeather.getIconFilename(vm.weather.weather[0].icon);
				});
			}
		};



	})
	.directive('forecastWeather', function (FApi, FWeather)
	{
		return {
		    restrict: 'E',
		    templateUrl:"partials/forecast-weather.html",
			scope: {
	            location: '@'
	        },
		    link: function (vm, element, attrs)
			{
				// Get forecast weather data from API
				let weatherCall = FApi.getForecastWeather(attrs.location);

				// After API returns...
				weatherCall.then(function(weatherData)
				{
					// Focus on needed data
					vm.weatherForecast = weatherData.data.list;
				});



				// ------------------------------------------------------------
				// Name: getIconFilename
				// Abstract: Takes icon code and returns image filename
				// ------------------------------------------------------------
				vm.getIconFilename = function(iconCode)
				{
					return FWeather.getIconFilename(iconCode);
				}
		    }
		};



	})
	.config(appConfig);

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function appConfig($stateProvider, $urlRouterProvider)
	{
		$stateProvider
		.state('home',
		{
			url: 			'/',
			templateUrl: 	'partials/home.html',
			controller: 	'CWeather',
	        controllerAs: 	'weather'
	    })
		.state('weather',
		{
			url: 			'/weather/:location',
			templateUrl: 	'partials/weather.html',
			controller: 	'CWeather',
	        controllerAs: 	'weather'
	    })
	}

})();
