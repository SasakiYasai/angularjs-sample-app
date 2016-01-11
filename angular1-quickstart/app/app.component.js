(function() {
  'use strict';

  angular
    .module('app')
    .directive('myApp', AppComponent);

  AppComponent.$inject = [];

  /* @ngInject */
  function AppComponent() {
    // Usage: <my-app>Loading...</my-app>
    //
    // Creates: prints a sample text
    //
    var directive = {
      restrict: 'E',
      template: '<h1>My First Angular 1 App</h1>'
    };
    return directive;
  }
})();
