(function() {
  'use strict';

  angular
    .module('sampleApp')
    .directive('sampleOptions', SampleOptions);

  SampleOptions.$inject = [];

  /* @ngInject */
  function SampleOptions() {
    // Usage: <sample-options type="list"></sample-options>
    //
    // Creates: a list of options
    //
    var directive = {
      bindToController: true,
      controller: OptionsController,
      controllerAs: '$options',
      link: link,
      restrict: 'E',
      scope: {},
      templateUrl: function(el, attr) {
        console.log('directive templateUrl function(el, attr)');
        console.log(el);
        console.log(attr);
        return 'app/choice/options-' + attr.type + '.directive.html';
      }
    };
    return directive;

    function link(scope, element, attrs) {
      console.log('directive link function(scope, element, attrs)');
      console.log(scope);
      console.log(element);
      console.log(attrs);
    }
  }

  OptionsController.$inject = [];

  /* @ngInject */
  function OptionsController() {
    var vm = this;
    vm.data = ['one', 'two', 'three', 'four', 'five'];
  }

})();
