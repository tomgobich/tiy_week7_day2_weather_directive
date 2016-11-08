(() => {

	'use strict';

	angular.module('app')
		.factory('FWeather', function(FApi, FLocalStorage)
		{
			// ------------------------------------------------------------
			// Name: getIconFilename
			// Abstract: Takes icon code and returns image filename
			// ------------------------------------------------------------
			const getIconFilename = function(iconCode)
			{
				// Match icon code then return appropriate image name.type
				switch(iconCode)
					{
						case '01d':
							return 'sunny.svg';
							break;
						case '01n':
							return 'moon.svg';
							break;
						case '02d':
							return 'cloud-few.svg';
							break;
						case '02n':
							return 'cloud-few-night.svg';
							break;
						case '03d':
						case '03n':
						case '04d':
						case '04n':
							return 'cloud-scattered.svg';
							break;
						case '09d':
							return 'rainy.svg';
							break;
						case '09n':
							return 'rainy-night.svg';
							break;
						case '10d':
						case '10n':
							return 'rain.svg';
							break;
						case '11d':
						case '11n':
							return 'storm.svg';
							break;
						case '13d':
						case '13n':
							return 'snowflake.svg';
							break;
						case '50d':
						case '50n':
							return 'raindrop.svg';
							break;
						default:
							return iconCode;
							break;
					}
			}





			return {
				getIconFilename,
			}

		})
})();
