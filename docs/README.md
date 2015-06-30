# [Material-UI](http://callemall.github.io/material-ui/)

This is the documentation site for [Material-UI](http://callemall.github.io/material-ui/).

## Installation
After cloning the repository, install dependencies:
```
cd <project folder>/material-ui
npm install
cd <project folder>/material-ui/docs
npm install
```

Now you can run your local server:
```
npm start
```

#Making it work independently

 * Copy docs folder to another place
 * Make this changes to ```gulp/config.js```

```
var dest = './build';
var src = './src';
// Commented sourced mui folder
// var mui = '../src';
```

  * Make this changes to ```gulp/tasks/eslint.js```

```
gulp.task('eslint', shell.task([
// Disable eslint task
//   '"../node_modules/.bin/eslint" ../src'
])).on('error', handleErrors);

```

  * Make this changes to ```gulp/tasks/browserify.js```

```
      // Material-UI Source path
      // Comment sourced path
      // paths: ['../src']

    });
...
    // Comment sourced material-ui index modules
    // bundler.require('../src/index.js', {expose: 'material-ui'});
    bundler.transform(babelify.configure({stage: 1}));
```

  * Add some npm modules to make it work. Run this in console

```
npm install material-ui
npm install react
npm install react-router
npm install react-tap-event-plugin
```

  * Start server. Now you have a independent Docs application

```
npm start
```

#Description of [Gulp](https://github.com/gulpjs/gulp) Plugins


##[browserify](https://github.com/substack/node-browserify) 
Browsers do not allow us to use the require method from Node.js. With browserify, we can implement dependency management on the browser. It also will bundle the code into one file in an efficient way to not repeat dependiencies that are used more than once. 

##[browserSync](http://www.browsersync.io/)
When developing and testing the website, browserSync is a powerful tool that will rebuild and refresh the webpage so you can see the changes you make as you are working. 

##markup
Copies all of the files from /src/www to the build folder. 

##[gulp_starter](https://github.com/greypants/gulp-starter)
A useful repository that explains how many of gulp's features work and contains an example project to get familiar with it. We use this example to construct our own project.
