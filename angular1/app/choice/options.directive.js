(function() {
  'use strict';

  angular
    .module('sampleApp')
    .directive('sampleOptions', SampleOptions);

  SampleOptions.$inject = [];

  /* @ngInject */
  function SampleOptions() {
    // Usage: <sample-options></sample-options>
    //
    // Creates: a list of options
    //
    var directive = {
      bindToController: true,
      controller: OptionsController,
      controllerAs: 'vm',
      link: link,
      restrict: 'EA',
      scope: {},
      templateUrl: 'app/choice/options.directive.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }

  OptionsController.$inject = [];

  /* @ngInject */
  function OptionsController() {
    var vm = this;

    vm.options = ['one', 'two', 'three', 'four', 'five'];
  }

})();
