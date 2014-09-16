'use strict';

//Setting up route
angular.module('octobox').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// For unmatched routes:
		$urlRouterProvider.otherwise('/');
		// states for my app
		$stateProvider
			// Collections
			.state('collection by path', {
				url: '/collection/:path',
				templateUrl: 'views/content/collection/view.html'
			})
			// Stacks
			// Edit Stack
			.state('edit stack by path', {
				url: '/stack/:collection/:stack/edit',
				templateUrl: 'views/content/stack/edit.html'
			})
			.state('stack by path', {
				url: '/stack/:collection/:stack',
				templateUrl: 'views/content/stack/view.html'
			})
			// File
			// Edit File in inbox
			.state('edit inbox file by path', {
				url: '/file/:filename/edit',
				templateUrl: 'views/content/file/edit.html'
			})
			// Edit File in collection
			.state('edit collection file by path', {
				url: '/file/:collection/:filename/edit',
				templateUrl: 'views/content/file/edit.html'
			})
			// Edit File in stack
			.state('edit stack file by path', {
				url: '/file/:collection/:stack/:filename/edit',
				templateUrl: 'views/content/file/edit.html'
			})
			// File in inbox
			.state('inbox file by path', {
				url: '/file/:filename',
				templateUrl: 'views/content/file/view.html'
			})
			// File in collection
			.state('collection file by path', {
				url: '/file/:collection/:filename',
				templateUrl: 'views/content/file/view.html'
			})
			// File in stack
			.state('stack file by path', {
				url: '/file/:collection/:stack/:filename',
				templateUrl: 'views/content/file/view.html'
			})
			// Inbox
			.state('inbox', {
				url: '/inbox',
				templateUrl: 'views/content/inbox/view.html'
			})
			// Everything
			.state('recent', {
				url: '/recent',
				templateUrl: 'views/content/recent/view.html'
			})
			// Dropbox
			.state('dropbox auth', {
				url: '/callback',
				templateUrl: 'views/dropbox/auth.html'
			})
			// User
			.state('user details', {
				url: '/account',
				templateUrl: 'views/user/account.html'
			})
			// Tags
			.state('all tags', {
				url: '/tags',
				templateUrl: 'views/content/tag/list.html'
			})
			.state('create tag', {
				url: '/new/tag',
				templateUrl: 'views/content/tag/create.html'
			})
			.state('edit tag', {
				url: '/tag/:name/edit',
				templateUrl: 'views/content/tag/edit.html'
			})
			.state('tag by name', {
				url: '/tag/:name',
				templateUrl: 'views/content/tag/view.html'
			})
			// Home
			.state('home', {
				url: '/',
				templateUrl: 'views/index.html'
			});
	}
	// Whitelist dropbox URLs to prevent sending OPTIONS request.
]).config(['$sceDelegateProvider', function($sceDelegateProvider) {
	$sceDelegateProvider.resourceUrlWhitelist(['self', 'https://api-content.dropbox.com/**', 'https://api.dropbox.com/**']);

}]).config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	$httpProvider.defaults.headers.responseType = 'blob';
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
	// set delete headers to accept a request body
	// $httpProvider.defaults.headers.delete = { 'Content-Type': 'application/json;charset=utf-8' };
	// $httpProvider.defaults.headers.remove = { 'Content-Type': 'application/json;charset=utf-8' };
}]).config(['$compileProvider', function($compileProvider) {
	$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);

}]).config(['ngClipProvider', function(ngClipProvider) {
  ngClipProvider.setPath('lib/zeroclipboard/ZeroClipboard.swf');

}]).config(['$provide', function ($provide) { // fixes flash-on-load for animations
	$provide.decorator('ngShowDirective', ['$delegate', '$animate', function(
			$delegate, $animate){

			function toBoolean(value) {
				if (typeof value === 'function') {
					value = true;
				} else if (value && value.length !== 0) {
					var v = angular.lowercase('' + value);
					value = !(v == 'f' || v == '0' || v == 'false' || v == 'no' || v == 'n' || v == '[]');
				} else {
					value = false;
				}
				return value;
			}

			$delegate[0].compile = function() {
				return function(scope, element, attr){
					scope.$watch(attr.ngShow, function ngShowWatchAction(value, oldVal){
						if ((value === oldVal) && toBoolean(value) === false) {
							element.addClass('ng-hide');
							return;
						}
						$animate[toBoolean(value) ? 'removeClass' : 'addClass'](element, 'ng-hide');
					});
				};
			};
			return $delegate;
		}]);
}]);

//Setting HTML5 Location Mode
// angular.module('octobox').config(['$locationProvider',
//   function($locationProvider) {
//     $locationProvider.html5Mode(true);
//     $locationProvider.hashPrefix('!');
//   }
// ]);
