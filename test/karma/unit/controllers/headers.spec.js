'use strict';

(function() {
	describe('<Controllers> \n', function() {
		describe('HeaderController', function() {
			// Load the controllers module
			beforeEach(module('octobox'));

			var scope, HeaderController;

			beforeEach(inject(function($controller, $rootScope) {
				scope = $rootScope.$new();

				HeaderController = $controller('HeaderController', {
					$scope: scope
				});
			}));

			it('should expose some global scope \n', function() {

				expect(scope.global).toBeTruthy();

			});
		});
	});
})();