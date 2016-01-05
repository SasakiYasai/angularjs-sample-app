describe('ChoiceController', function() {
    var controller;

    beforeEach(module('sampleApp'));

    beforeEach(inject(function($controller) {
        controller = $controller('ChoiceController');
    }));

    describe('Choice controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });
    });
});
