(function() {
    'use strict';

    angular
        .module('sampleApp')
        .controller('AttractorController', AttractorController);

    AttractorController.$inject = ['$log'];

    /* @ngInject */
    function AttractorController($log) {
        var vm = this;
        vm.title = 'AttractorController';

        activate();

        ////////////////

        function activate() {
        	$log.log('AttractorController.activate()');
        }
    }
})();
