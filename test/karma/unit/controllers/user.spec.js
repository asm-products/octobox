/*global angular */
'use strict';

(function() {
	// Articles Controller Spec
	describe('<Controllers> \n', function() {
		describe('UserController', function() {
			// The $resource service augments the response object with methods
			// for updating and deleting the resource. If we were to use the standard
			// toEqual matcher, our tests would fail because the test values would
			// not match the responses exactly. To solve the problem, we use a
			// newly-defined toEqualData Jasmine matcher. When the toEqualData
			// matcher compares two objects, it takes only object properties
			// into account and ignores methods.
			beforeEach(function() {
				this.addMatchers({
					toEqualData: function(expected) {
						return angular.equals(this.actual, expected);
					}
				});
			});
			// Load the controllers module
			beforeEach(module('octobox'));

			// Initialize the controller and a mock scope
			var UserController,
					scope,
					$httpBackend,
					$stateParams,
					$location;

			// The injector ignores leading and trailing underscores here
			// (i.e. _$httpBackend_). This allows us to inject a service but then
			// attach it to a variable with the same name as the service.
			beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_, $templateCache) {

				scope = $rootScope.$new();

				UserController = $controller('UserController', {
					$scope: scope
				});

				$stateParams = _$stateParams_;

				$httpBackend = _$httpBackend_;

				$location = _$location_;
				// set the template cache should use a preprocessor when adding more tests
				$templateCache.put('views/index.html', 'views/user/account.html');
			}));


			it('$scope.findOne() should create an user array that does not equal null', function() {
					// fixture URL parament
					$stateParams.userId = '525a8422f6d0f87f0e407a33';
					
					// fixture response object
					var testUserData = function() {
						return {
							_id: '525a8422f6d0f87f0e407a33',
							email: 'test@octobox.com',
							name: 'Test User'
						};
					};

					// test expected GET request with response object
					$httpBackend.expectGET(/api\/users\/me/).respond(testUserData());

					// run controller
					scope.findOne();
					$httpBackend.flush();

					// test scope value
					expect(scope.user).toEqualData(testUserData());

				});

			it('$scope.update() should update a valid users \n', inject(function(User) {

				var newName = 'User Test';
				// fixture rideshare
				var putUserData = function() {
					return {
						_id: '525a8422f6d0f87f0e407a33',
						name: 'Test User',
						email: 'test@octoboxapp.com'
					};
				};

				// mock users object from form
				var user = new User(putUserData());

				// mock users in scope
				scope.user = user;

				// test PUT happens correctly
				$httpBackend.expectPUT(/api\/users\/([0-9a-fA-F]{24})$/).respond();

				// testing the body data is out for now until an idea for testing
				// the dynamic updated array value is figured out
				//$httpBackend.expectPUT(/users\/([0-9a-fA-F]{24})$/, putUserData()).respond();
				/*
				Error: Expected PUT /api/users\/([0-9a-fA-F]{24})$/ with different data
				EXPECTED: {"_id":"525a8422f6d0f87f0e407a33","title":"An User about Octobox","to":"Octobox is great!"}
				GOT:		{"_id":"525a8422f6d0f87f0e407a33","title":"An User about Octobox","to":"Octobox is great!","updated":[1383534772975]}
				*/

				// run controller
				scope.update(newName, function() {});
				$httpBackend.flush();

				// test URL location to new object
				expect($location.path()).toBe('/');
				expect(scope.user.name).toBe(newName);
			}));

		});
	});
}());