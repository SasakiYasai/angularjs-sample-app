(function() {
    'use strict';

    angular
        .module('sampleApp')
        .controller('RecapController', RecapController);

    RecapController.$inject = ['$log'];

    /* @ngInject */
    function RecapController($log) {
        var vm = this;
        vm.title = 'RecapController';

        activate();

        ////////////////

        function activate() {
        	$log.log('RecapController.activate()');
        }
    }
})();
