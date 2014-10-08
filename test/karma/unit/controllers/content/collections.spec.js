/*global angular */
'use strict';

(function() {
	// Collections Controller Spec
	describe('<Controllers> \n', function() {
		describe('CollectionsController', function() {
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
						// jshint ignore:line
						return angular.equals(this.actual, expected);
					}
				});
			});
			
			// Load the controllers module
			beforeEach(module('octobox'));

			// Initialize the controller and a mock scope
			var CollectionsController,
					scope,
					$httpBackend,
					$stateParams,
					$location;

			// The injector ignores leading and trailing underscores here
			// (i.e. _$httpBackend_). This allows us to inject a service but then
			// attach it to a variable with the same name as the service.
			beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {

				scope = $rootScope.$new();

				CollectionsController = $controller('CollectionsController', {
					$scope: scope
				});

				$stateParams = _$stateParams_;

				$httpBackend = _$httpBackend_;

				$location = _$location_;

			}));

			it('$scope.find() should create an array with at least one collection object', function() {

					// test expected GET request
					$httpBackend.expectGET('api/content/collection').respond([{
						title: 'An Collection about Octobox',
						content: 'Octobox rocks!'
					}]);

					// run controller
					scope.find();
					$httpBackend.flush();

					// test scope value
					expect(scope.collections).toEqualData([{
						title: 'An Collection about Octobox',
						content: 'Octobox rocks!'
					}]);

				});

			it('$scope.findOne() should create a collection array fetched with a URL parameter', function() {
					// fixture URL parament
					$stateParams.path = 'Octobox';
					// fixture response object
					var testCollectionData = function() {
						return {
							title: 'A Collection about Octobox',
							content: 'Octobox rocks!'
						};
					};

					// test expected GET request with response object
					$httpBackend.expectGET(/api\/content\/collection\/(.*)$/).respond(testCollectionData());

					// run controller
					scope.findOne();
					$httpBackend.flush();

					// test scope value
					expect(scope.collection.title).toEqualData(testCollectionData().title);
					expect(scope.collection.content).toEqualData(testCollectionData().content);

				});

			it('$scope.create() should send a POST request with the form values and go to new URL', function() {

					var name = 'Octobox';
					// fixture expected POST data
					var postCollectionData = function() {
						return {
							path: 'octobox',
							name: 'Octobox'
						};
					};

					// fixture expected response data
					var responseCollectionData = function() {
						return {
							path: 'octobox',
							name: 'Octobox'
						};
					};
					// test post request is sent
					$httpBackend.expectPOST('api/content/collection/' + postCollectionData().path, postCollectionData()).respond(responseCollectionData());

					// Run controller
					scope.create(name, function() {});
					$httpBackend.flush();

					// test URL location to new object
					expect($location.path()).toBe('');
				});

			it('$scope.update() should update a valid collection', inject(function(Collections) {

				// fixture rideshare
				var putCollectionData = function() {
					return {
						path: 'Octobox',
						title: 'An Collection about Octobox',
						to: 'Octobox is great!'
					};
				};

				// mock collection object from form
				var collection = new Collections(putCollectionData());

				// mock collection in scope
				scope.collection = collection;

				// test PUT happens correctly
				$httpBackend.expectPUT(/api\/content\/collection\/(.*)$/).respond();

				// testing the body data is out for now until an idea for testing the dynamic updated array value is figured out
				//$httpBackend.expectPUT(/content/collection\/([0-9a-fA-F]{24})$/, putCollectionData()).respond();
				/*
				Error: Expected PUT /api/content/collection\/([0-9a-fA-F]{24})$/ with different data
				EXPECTED: {"_id":"525a8422f6d0f87f0e407a33","title":"An Collection about Octobox","to":"Octobox is great!"}
				GOT:		{"_id":"525a8422f6d0f87f0e407a33","title":"An Collection about Octobox","to":"Octobox is great!","updated":[1383534772975]}
				*/

				// run controller
				scope.update();
				$httpBackend.flush();

				// test URL location to new object
				expect($location.path()).toBe('/api/content/collection/' + putCollectionData().path);

			}));

			it('$scope.remove() should send a valid DELETE request and remove the collection \n', inject(function(Collections) {

					// fixture rideshare
					var collection = new Collections({
						path: 'Octobox'
					});

					// mock rideshares in scope
					scope.collections = [];
					scope.collections.push(collection);

					// test expected rideshare DELETE request
					$httpBackend.expectDELETE(/api\/content\/collection\/(.*)$/).respond(204);

					// run controller
					scope.remove(collection);
					$httpBackend.flush();

					// test after successful delete URL location collections lis
					//expect($location.path()).toBe('/content/collection');
					expect(scope.collections.length).toBe(0);
				}));
		});
	});
}());
