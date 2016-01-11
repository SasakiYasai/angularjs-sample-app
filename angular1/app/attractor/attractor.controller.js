(function() {
  'use strict';

  angular
    .module('sampleApp')
    .controller('AttractorController', AttractorController);

  AttractorController.$inject = ['$log'];

  /* @ngInject */
  function AttractorController($log) {
    var vm = this;
    vm.title = 'Welcome!';

    activate();

    ////////////////

    function activate() {
      $log.log('AttractorController.activate()');
    }
  }
})();
