(() => {

	'use strict';

	angular.module('app')
		.controller('CWeather', function(FWeather, $state, $stateParams)
		{

			let vm = this;

			// Get location from stateParams
			vm.location = $stateParams.location;

		})

})();
