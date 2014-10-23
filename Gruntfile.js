'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			options: {
				livereload: true
			},
			jade: {
				files: ['app/views/**'],
			},
			html: {
				files: ['public/views/**', 'public/views/articles/**'],
			},
			js: {
				files: ['gruntfile.js', 'server.js', 'app/**/*.js', 'public/js/src/**', 'test/karma/**/*.js', 'test/mocha/**/*.js'],
				tasks: ['jshint', 'concat'], // , 'uglify'
			},
			css: {
				files: ['public/scss/*.scss'],
				tasks: ['sass', 'cssjoin', 'cssmin']
			}
		},
		jshint: {
			all: {
				src: [
					'Gruntfile.js',
					'server.js',
					'app/**/*.js',
					'test/karma/**/*.js',
					'test/mocha/**/*.js',
					'public/js/src/*.js',
					'public/js/src/controllers/*.js',
					'public/js/src/services/*.js',
					'public/js/src/controllers/**/*.js',
					'public/js/src/services/**/*.js',
					'public/js/src/init.js'
				],
			},
			options: {
				jshintrc: true
			}
		},
		concat:{
			options: {
				separator: ';'
			},
			js: {
				src: [
					'public/lib/lodash/dist/lodash.min.js',
					'public/lib/zeroclipboard/ZeroClipboard.min.js',
					'public/lib/moment/min/moment.min.js',
					'public/lib/danialfarid-angular-file-upload/dist/angular-file-upload-shim.min.js',
					'public/lib/codemirror/lib/codemirror.js',
					'public/lib/codemirror/addon/mode/loadmode.js',
					'public/lib/codemirror/addon/mode/overlay.js',
					'public/lib/codemirror/addon/edit/closebrackets.js',
					'public/lib/codemirror/mode/markdown/markdown.js',
					'public/lib/codemirror/mode/gfm/gfm.js', // markdown for codemirror
					'public/lib/mousetrap/mousetrap.min.js', // keyboard shortcut library
					'public/lib/angular/angular.min.js',
					'public/lib/angular-animate/angular-animate.min.js',
					'public/lib/angular-cookies/angular-cookies.min.js',
					'public/lib/angular-resource/angular-resource.min.js',
					'public/lib/angular-ui-router/release/angular-ui-router.min.js',
					'public/lib/angular-dropdowns/dist/angular-dropdowns.min.js',
					'public/lib/mgo-mousetrap/wMousetrap.js', // mousetrap directive
					'public/lib/ng-clip/src/ngClip.js',
					'public/lib/angular-moment/angular-moment.min.js',
					'public/lib/angular-deckgrid/angular-deckgrid.js',
					'public/lib/angular-ui-codemirror/ui-codemirror.js',
					'public/lib/angular-bindonce/bindonce.js',
					'public/lib/danialfarid-angular-file-upload/dist/angular-file-upload.min.js',
					'public/lib/ngDropbox/dropbox.js',
					'public/js/src/*.js',
					'public/js/src/controllers/*.js',
					'public/js/src/services/*.js',
					'public/js/src/controllers/**/*.js',
					'public/js/src/directives/**/*.js',
					'public/js/src/services/**/*.js',
					'public/js/src/init.js'
				],
				dest: 'public/js/octobox.js'
			}
		},
		uglify: {
			js: {
				files: {
					'public/js/octobox.min.js' : ['public/js/octobox.js']
				}
			}
		},
		sass: {
			dist: {
				files: {
					'public/css/style.css' : 'public/scss/style.scss',
				}
			}
		},
		cssjoin: {
			sameFile : {
				files:  grunt.file.expandMapping(['public/css/*.css']),
			}
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: 'public/css/',
				src: ['*.css', '!*.min.css'],
				dest: 'public/css/',
				ext: '.min.css'
			}
		},
		nodemon: {
			dev: {
				options: {
					file: 'server.js',
					args: [],
					ignoredFiles: ['public/**'],
					watchedExtensions: ['js'],
					// nodeArgs: ['--debug'],
					delayTime: 1,
					env: {
						PORT: 3000
					},
					cwd: __dirname
				}
			}
		},
		concurrent: {
			tasks: ['nodemon', 'watch'],
			options: {
				logConcurrentOutput: true
			}
		},
		// Tests
		mochaTest: {
			options: {
				reporter: 'spec',
				require: 'server.js'
			},
			src: ['test/mocha/**/*.js']
		},
		karma: {
			unit: {
				configFile: 'test/karma/karma.conf.js'
			}
		},
		env: {
			test: {
				NODE_ENV: 'test'
			}
		}
	});

	// Load the tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-cssjoin');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-env');

	//Making grunt default to force in order not to break the project.
	grunt.option('force', true);

	//Default task(s).
	grunt.registerTask('default', ['jshint', 'concurrent', 'concat:js', 'uglify:js']);
	grunt.registerTask('test', ['env:test', 'mochaTest', 'karma:unit']);
};
