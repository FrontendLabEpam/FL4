### JS Tools homework

#### Building project
Build files from __dev__ to __dist__ using Node.js tools:

- concatenate `dev/scripts/*.js` into `dist/scripts/app.js`  
  - bonus: use *sourcemaps* to debug on source js files
- uglify scripts into `dist/scripts/app.min.js`
- compile `dev/styles/*.scss` into `dist/styles/styles.css`
  - bonus: use *sourcemaps* to debug on source scss file
- uglify styles into `dist/styles/styles.min.css`

Watchers:
- watch `dev/styles/*.js` and rebuild `dist/scripts/app.js` on filechanges
- watch `dev/styles/*.scss` and rebuild `dist/styles/styles.css` on filechanges

Serve Project:
- serve your `dist` folder to `localhost:8080`
- proxy your localhost to be viewable from outside

Project should be easily built and served from console.  
Use __Gulp__, __Grunt__, __NPM__ scripts or even simple __bash__ commands to build and watch+serve project.

E.g.:  
`npm run build` - to build project  
`npm run build:production` - to build minified files  
`npm run serve` - to run watchers and serve project  

---
#### Debugging project
Fix js files in `dev/scripts/` so you have a working app in `dist/scripts/`

---
#### Expected result
- `package.json` file with a list of used tools in *dependencies* and *devDependencies*.
- `README.md` file with explanation on how to build and run application
- `dist` folder with `/scripts` and `/styles` built files

---
#### Tips
There might be a lot of possible solutions to build project, here is a list of possible tools to use for this task :
- https://github.com/mishoo/UglifyJS2
- https://github.com/sass/node-sass
- https://github.com/cloudhead/node-static
- https://github.com/defunctzombie/localtunnel

Most of popular tools have plugins to task runners.
