# <%= appname %> responsive HTML e-mail templates

Using GruntJS, Pug (templating system) and Sass (CSS) to generate responsive HTML e-mails with inlined CSS.

*By <%= appauthor %>, Dutchwebworks Waddinxveen, may 2017*

## One time installation

* Make sure NodeJS is installed by going to the [NodeJS website](https://nodejs.org/en/), download and install it for your operating system. This will also make the `npm` command-line tool available.
* Install the [Grunt command-line interface](http://gruntjs.com/getting-started) (**grunt-cli**) by running: `npm install -g grunt-cli`
* Using the command-line go to the directory where this projects `package.json` file is located and install the project dependencies by running: `npm install`.

## Development

For developing the HTML templates (Pug source files) run the command below inside this projects directory (where the `Gruntfile.js` resides).

	grunt serve

This will run a NodeJS web server and open a the default browser on `http://localhost:3000` and serve the `dist/` directory.

### File watchers

Grunt will **watch** for changes to source files and compile the following source files to there respective output:

* `src/pug/*.pug` into `dist/*.html`
* `src/scss/*.scss` into `dist/css/*.css`
* Copy over `src/img/*.*` into `dist/img`

## Inline the CSS for export

During development the `style.css` is linked to the HTML files. Before delivery all the CSS needs to be inline into the HTML files.

Run the command below inside this projects directory (where the `Gruntfile.js` resides). This will inline the CSS into the HTML files for delivery.

	grunt export

## Testing in e-mail clients

These HTML e-mail templates need to be tested in the following (web) e-mail clients:

* Windows Outlook (2 most recent versions).
* Web e-mail clients in Chrome, Internet Explorer, Edge and Firefox: Hotmail and Gmail.
* Smartphone: iOS Mail, Android Gmail.
* Apple Mail.

## More info

* [GruntJS](http://gruntjs.com/)
* [Grunt inline CSS](https://www.npmjs.com/package/grunt-inline-css)
* [Pug: Getting started](https://pugjs.org/api/getting-started.html)