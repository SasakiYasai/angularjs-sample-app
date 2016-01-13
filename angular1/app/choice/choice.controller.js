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
    vm.cityOptions = ['Rome', 'Amsterdam', 'Hamburg', 'Barcelona', 'Paris', 'London', 'Berlin', 'New York', 'San Francisco'];
    vm.countryOptions = ['Italy', 'Netherland', 'Germany', 'Spain', 'France', 'UK', 'United States'];

    activate();

    ////////////////

    function activate() {
      $log.log('ChoiceController.activate()');
    }
  }
})();
