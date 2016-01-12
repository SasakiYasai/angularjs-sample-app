(function() {
  'use strict';

  angular
    .module('sampleApp')
    .config(config);

  function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('attractor');

    $stateProvider
      .state('attractor', {
        url: '/attractor',
        templateUrl: 'app/attractor/attractor.html'
      })
      .state('choice', {
        url: '/choice',
        templateUrl: 'app/choice/choice.html'
      })
      .state('choice.list', {
        url: '/list',
        templateUrl: 'app/choice/choice.list.html'
      })
      .state('recap', {
        url: '/recap',
        templateUrl: 'app/recap/recap.html'
      });
  }

})();
