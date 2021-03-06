## Yeoman generator for simple Pug / Sass enabled e-mail templates

Simple Pug e-mail templates with Grunt: Sass to Css compilation and a Css inliner task.

*By Dennis Burger, Dutchwebworks Waddinxveen may 2017*

## One time installation

Make sure NodeJS is installed by going to the [NodeJS website](https://nodejs.org/en/), download and install it for your operating system. This will also make the `npm` command-line tool available.

Open a **command-line window** (Terminal or MS-DOS prompt) and type the following to globally (`-g`) install the above required NPM components all in one go:

	npm install -g yo grunt-cli

## Download this Yeoman generator

Before you can use this generator you need to download it. Run the command below to **globally** install this generator.

	npm install -g generator-dwwpugemail

### Check globally installed NPM packages

To view your globally installed NPM list type the following. The new Yeoman generator should be listed here.

	npm ls -g --depth=0

## Using this generator in a new project

Create and `cd` to a new (empty) project directory where we'll use this generator as a starting point for a new project. Now type:

	yo dwwpugemail

### Yeoman questions

You will be greated by Yeoman and he will ask you some basic questions regarding your new project. This **meta-data information** is used inside some of the Yeoman generated files.

Finally a web browser will open with `http://localhost:3000`. In the background Grunt or Gulp is watching for changes to the following files:

* *.pug
* *.scss
* *.js
* *.img

When any of these change Grunt will compile / copy over those changes from the `src/` to the `dist/` directory and refresh the web browser.

## Stopping and continuing working on this web site

When your working with this setup, Grunt is running as described above etc., and want to quit your local development, do the following.

### Stop Grunt from watching

In the still running **command-line window** (Terminal or MS-DOS prompt) hit `ctrl + c` and type `y`. This will stop Grunt from watching, compiling and serving the `dist/` directory to `http://localhost:3000` in the web browser. The web site no longer works in your web browser.

### Start Grunt watching and serving the web site again

To continue working on your site open a **command-line window** (Terminal or MS-DOS prompt) and make sure you `cd` into the directory where the `Gruntfile.js` resides and type:

	grunt serve
    
## Yeoman generator

### Updating

If this Yeoman generator is updated you can update your globally installed version with the newer version by just reinstalling it again.

	npm install -g generator-dwwpugemail

### Removing

Optionally: If you want to remove this globally installed Yeoman generator you need to **unlink** it. Open a **command-line window** (Terminal or MS-DOS prompt) and type:

	npm uninstall -g generator-dwwpugemail

Now you can't use `yo dwwpugemail` anymore to generate a **new web site** using this Yeoman generator.