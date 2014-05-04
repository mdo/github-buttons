var gulp = require("gulp"),
  replace = require("gulp-replace"),
  uglify = require("uglify-js"),
  CleanCSS = require("clean-css");

gulp.task("default", function () {
  return gulp.src("github-btn.html")
    // minify css
    .pipe(replace(/(<style[^>]*>)([\s\S]*)(<\/style>)/, function (_, open_tag, code, close_tag) {
      return open_tag.trim() + (new CleanCSS()).minify(code) + close_tag.trim();
    }))
    // uglify js
    .pipe(replace(/(<script[^>]*>)([\s\S]*)(<\/script>)/, function (_, open_tag, code, close_tag) {
      return open_tag.trim() + uglify.minify(code, {fromString: true}).code + close_tag.trim();
    }))
    .pipe(gulp.dest("dist/"));
});