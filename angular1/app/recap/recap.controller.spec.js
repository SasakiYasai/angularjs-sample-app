describe('RecapController', function() {
    var controller;

    beforeEach(module('sampleApp'));

    beforeEach(inject(function($controller) {
        controller = $controller('RecapController');
    }));

    describe('Recap controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });
    });
});
