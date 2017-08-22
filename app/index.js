'use strict';

var Generator = require('yeoman-generator'),
	mkdirp = require('mkdirp'),
	yosay = require('yosay'),
	chalk = require('chalk');

module.exports = class extends Generator {
	initializing() {
		var message = chalk.yellow.bold('Welcome to the Dutchwebworks ') + chalk.yellow('Pug e-mail template project');
		this.log(yosay(message, { maxLength: 16 }));
	}

	prompting() {
		return this.prompt([{
			type    : 'input',
			name    : 'name',
			message	: 'What is the name of this project?',
			default : this.appname
		}, {
			type    : 'input',
			name	: 'description',
			message	: 'What is the project description?',
		}, {
			type    : 'input',
			name	: 'yourname',
			message	: 'What is your name?',
		}, {
			type    : 'input',
			name	: 'youremail',
			message	: 'What is your e-mail address?',
		}, {
			type    : 'input',
			name	: 'version',
			message	: 'What is the version of your app?',
			default	: '0.1.0'
		}]).then((answers) => {
			this.appname = answers.name;
			this.appdescription = answers.description;
			this.appauthor = answers.yourname;
			this.youremail = answers.youremail;
			this.appversion = answers.version;
		});
	}

	configuring() {
		this.config.save();
	}

	writing() {
		var destRoot = this.destinationRoot(),
			sourceRoot = this.sourceRoot(),
			templateContext = {
				appname: this.appname,
				appdescription: this.appdescription,
				appauthor: this.appauthor,
				youremail: this.youremail,
				appversion: this.appversion,		
				appyear: new Date().getFullYear()
			};

		// ---------------------------
		// Copy over files and directories
		// ---------------------------

		this.fs.copy(sourceRoot + '/src', destRoot + '/src');
		this.fs.copy(sourceRoot + '/_gitignore', destRoot + '/.gitignore');
		this.fs.copy(sourceRoot + '/Gruntfile.js', destRoot + '/Gruntfile.js');

		// ---------------------------
		// Copy over (template) files
		// ---------------------------

		this.fs.copyTpl(sourceRoot + '/LICENSE', destRoot + '/LICENSE', templateContext);
		this.fs.copyTpl(sourceRoot + '/package.json', destRoot + '/package.json', templateContext);
		this.fs.copyTpl(sourceRoot + '/README.md', destRoot + '/README.md', templateContext);
		this.fs.copyTpl(sourceRoot + '/src/pug/helpers/config.pug', destRoot + '/src/pug/helpers/config.pug', templateContext);
		this.fs.copyTpl(sourceRoot + '/src/pug/modules/footer.pug', destRoot + '/src/pug/modules/footer.pug', templateContext);
		this.fs.copyTpl(sourceRoot + '/src/pug/modules/header.pug', destRoot + '/src/pug/modules/header.pug', templateContext);
		this.fs.copyTpl(sourceRoot + '/src/pug/modules/signature-default.pug', destRoot + '/src/pug/modules/signature-default.pug', templateContext);
	}

	install() {
		var message = chalk.yellow.bold('Running NPM install, hold on ...');
		this.log(yosay(message, { maxLength: 22 }));
		this.npmInstall();
	}

	end() {
		this.spawnCommand('grunt', ['serve']);
	}
};