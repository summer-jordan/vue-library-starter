# vue-library-starter
Boilerplate for developing vue components intended for publishing on npm.

## Library Bundles
Rollup is leveraged to generate 3 versions of the library intended for different environments.
* library.esm.js - ES Module Version. `module` in package.json
* library.js - CommonJS Version `main` in package.json
* library.browser.js - Minified, browser ready version. 

## @vue/cli
The vue cli is used for running a dev server and tests while developing the component.
Be sure to install it with `npm i -g @vue/cli`
