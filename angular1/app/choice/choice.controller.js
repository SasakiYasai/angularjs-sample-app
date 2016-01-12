(function() {
  'use strict';

  angular
    .module('sampleApp')
    .controller('ChoiceController', ChoiceController);

  ChoiceController.$inject = ['$log', '$location'];

  /* @ngInject */
  function ChoiceController($log, $location) {
    var vm = this;
    vm.title = 'Choose';

    activate();

    ////////////////

    function activate() {
      $log.log('ChoiceController.activate()');
    }
  }
})();
