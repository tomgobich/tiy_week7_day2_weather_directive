'use strict';

(function () {

	'use strict';

	angular.module('app').controller('CWeather', function (FWeather, $state, $stateParams) {

		var vm = this;

		// Get location from stateParams
		vm.location = $stateParams.location;
	});
})();