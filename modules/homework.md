1. index.html in practice folder should contain only 1 call to javascript file (cdn vendors are fine though)
  - you are free to use either requirejs (built by r.js) or browserify
  - `index.html` should look something like this:
  ```
  <body>
      <div id="app"></div>
      <script src="scripts/build.min.js"></script>
  </body>
  ```