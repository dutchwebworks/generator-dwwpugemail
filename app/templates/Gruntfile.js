module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt, {
		config: './package.json',
		scope: 'devDependencies'
	});

	grunt.initConfig({
		pkg: grunt.file.readJSON('./package.json'),
		config: {
			dist: './dist',
			src: './src',
			htmlPath: '<%= config.dist %>',
			pugPath: '<%= config.src %>/pug',
			scssPath: '<%= config.src %>/scss',
			cssPath: '<%= config.dist %>/css',
			imgPathSrc: '<%= config.src %>/img',
			imgPathDest: '<%= config.dist %>/img'
		},

		watch: {
			options: {
				spawn: false
			},
			sass: {
				files: '<%= config.scssPath %>/**/*.scss',
				tasks: ['recompilePugSass']
			},
			pug: {
				files: '<%= config.src %>/**/*.pug',
				tasks: ['pug:dist']
			},
			img: {
				files: '<%= config.imgPathSrc %>/*.{jpg,png,gif,svg}',
				tasks: ['copy:img']
			}
		},

		sass: {
			dev: {
				options: {
					outputStyle: 'expanded',
					sourceMap: true
				},
				files: [{
					expand: true,
					cwd: '<%= config.scssPath %>',
					src: ['*.scss'],
					dest: '<%= config.cssPath %>',
					ext: '.css',
				}]
			},
			dist: {
				options: {
					outputStyle: 'expanded',
					sourceMap: false
				},
				files: [{
					expand: true,
					cwd: '<%= config.scssPath %>',
					src: ['*.scss'],
					dest: '<%= config.cssPath %>',
					ext: '.css',
				}]
			}
		},

		pug: {
			dist: {
				options: {
					pretty: true,
					data: {
						debug: false
					}
				},
				files: [{
					expand: true,
					cwd: '<%= config.pugPath %>',
					src: ['*.pug'],
					dest: '<%= config.dist %>',
					ext: '.html',
				}]
			}
		},

		copy: {
			img: {
				files: [{
					expand: true,
					cwd: '<%= config.imgPathSrc %>',
					src: ['**'],
					dest: '<%= config.imgPathDest %>'
				}]
			}
		},

		// https://www.npmjs.com/package/grunt-inline-css
		// Options: https://github.com/Automattic/juice#juicefilepath-options-callback
		inlinecss: {
			options: {
				preserveMediaQueries: true,
				// removeStyleTags: false,
				preserveImportant: true,
				webResources: {
					images: false
				}
			},
			pages: {
				files: [{
					expand: true,
					cwd: '<%= config.htmlPath %>',
					src: ['*.html'],
					dest: '<%= config.htmlPath %>'
				}]
			}
		},

		clean: {
			dist: ['<%= config.dist %>']
		},

		browserSync: {
			site: {
				options: {
					watchTask: true,
					debugInfo: true,
					excludedFileTypes: ["map"],
					ghostMode: {
						clicks: true,
						scroll: true,
						links: true,
						forms: false
					},
					server: {
						baseDir: '<%= config.dist %>'
					}
				},	
				bsFiles: {
					src: [
						'<%= config.cssPath %>/*.css',
						'<%= config.htmlPath %>/*.html'
					]	
				}				
			}
		},
	});

	grunt.registerTask('recompilePugSass', 'Recompile both Pug and Sass', [
		'sass:dev',
		'pug',
	]);

	grunt.registerTask('build', 'Compile Pug templates and Sass to Css. Copy over Css and images files.', [
		'clean:dist',
		'sass:dist',
		'pug',
		'copy'
	]);

	grunt.registerTask('serve', 'Run browser-sync proxy server, with livereload and with file watcher for Pug- and Sass files', [
		'build',
		'browserSync',
		'watch'
	]);

	grunt.registerTask('export', 'Run build task and inline the CSS for the e-mail templates.', [
		'build',
		'inlinecss',
	]);
	
	grunt.registerTask('default', 'Run build task', [
		'export',
	]);
};