'use strict';

// Karma configuration

module.exports = function(config) {
	config.set({

		// base path, that will be used to resolve files and exclude
		basePath: '../../',


		// frameworks to use
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser
		files: [
			'public/lib/lodash/dist/lodash.js',
			'public/lib/zeroclipboard/ZeroClipboard.js',
			'public/lib/moment/moment.js',
			'public/lib/danialfarid-angular-file-upload/dist/angular-file-upload-shim.js',
			'public/lib/codemirror/lib/codemirror.js',
			'public/lib/codemirror/addon/mode/loadmode.js',
			'public/lib/codemirror/addon/mode/overlay.js',
			'public/lib/codemirror/addon/edit/closebrackets.js',
			'public/lib/codemirror/mode/markdown/markdown.js',
			'public/lib/codemirror/mode/gfm/gfm.js', // markdown for codemirror
			'public/lib/mousetrap/mousetrap.js', // keyboard shortcut library
			'public/lib/angular/angular.js',
			'public/lib/angular-mocks/angular-mocks.js',
			'public/lib/angular-animate/angular-animate.js',
			'public/lib/angular-cookies/angular-cookies.js',
			'public/lib/angular-resource/angular-resource.js',
			'public/lib/angular-ui-router/release/angular-ui-router.js',
			'public/lib/angular-dropdowns/dist/angular-dropdowns.js',
			'public/lib/mgo-mousetrap/wMousetrap.js', // mousetrap directive
			'public/lib/ng-clip/src/ngClip.js',
			'public/lib/angular-moment/angular-moment.js',
			'public/lib/angular-deckgrid/angular-deckgrid.js',
			'public/lib/angular-ui-codemirror/ui-codemirror.js',
			'public/lib/angular-bindonce/bindonce.js',
			'public/lib/danialfarid-angular-file-upload/dist/angular-file-upload.js',
			'public/lib/ngDropbox/dropbox.js',
			'public/js/src/app.js',
			'public/js/src/config.js',
			'public/js/src/directives/*.js',
			'public/js/src/filters/*.js',
			'public/js/src/services/*.js',
			'public/js/src/services/**/*.js',
			'public/js/src/controllers/*.js',
			'public/js/src/controllers/**/*.js',
			'public/js/src/init.js',
			'test/karma/unit/**/*.js'
		],


		// list of files to exclude
		exclude: [

		],

		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		//reporters: ['progress'],
		reporters: ['spec'],

		// coverage
		preprocessors: {
			// source files, that you wanna generate coverage for
			// do not include tests or libraries
			// (these files will be instrumented by Istanbul)
			'public/js/src/controllers/*.js': ['coverage'],
			'public/js/src/services/*.js': ['coverage']
		},

		coverageReporter: {
			type: 'html',
			dir: 'test/coverage/'
		},

		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['PhantomJS'],


		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,


		// Continuous Integration mode
		// if true, it captures browsers, run tests and exit
		singleRun: true
	});
};