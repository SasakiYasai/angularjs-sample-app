describe('AttractorController', function() {
    var controller;

    beforeEach(module('sampleApp'));

    beforeEach(inject(function($controller) {
        controller = $controller('AttractorController');
    }));

    describe('Attractor controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });
    });
});
