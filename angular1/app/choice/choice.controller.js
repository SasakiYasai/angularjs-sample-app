(function() {
    'use strict';

    angular
        .module('sampleApp')
        .controller('ChoiceController', ChoiceController);

    ChoiceController.$inject = ['$log'];

    /* @ngInject */
    function ChoiceController($log) {
        var vm = this;
        vm.title = 'ChoiceController';

        activate();

        ////////////////

        function activate() {
        	$log.log('ChoiceController.activate()');
        }
    }
})();
