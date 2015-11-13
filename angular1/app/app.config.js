
angular.module('myApp').config(function($routeProvider) {

	$routeProvider
		.when('/attractor', {
			controller: 'AttractorController',
			templateUrl: 'app/attractor/attractor.html'
		})
		.when('/choice', {
			controller: 'ChoiceController',
			templateUrl: 'app/choice/choice.html'
		})
		.when('/recap', {
			controller: 'RecapController',
			templateUrl: 'app/recap/recap.html'
		})
		.otherwise({
			redirectTo: '/attractor'
		});
});
