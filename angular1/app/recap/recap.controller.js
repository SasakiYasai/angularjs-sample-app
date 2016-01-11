(function() {
  'use strict';

  angular
    .module('sampleApp')
    .controller('RecapController', RecapController);

  RecapController.$inject = ['$log'];

  /* @ngInject */
  function RecapController($log) {
    var vm = this;
    vm.title = 'Thank you!';

    activate();

    ////////////////

    function activate() {
      $log.log('RecapController.activate()');
    }
  }
})();
