'use strict';

(function() {
	describe('<Controllers> \n', function() {
		describe('IndexController', function() {
			// Load the controllers module
			beforeEach(module('octobox'));

			var scope, IndexController;

			beforeEach(inject(function($controller, $rootScope) {
				scope = $rootScope.$new();

				IndexController = $controller('IndexController', {
					$scope: scope
				});
			}));

			it('should expose some global scope \n', function() {

				expect(scope.global).toBeTruthy();

			});
		});
	});
})();