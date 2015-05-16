var gulp    = require('gulp');
var htmlmin = require('gulp-htmlmin');

// Minify HTML
gulp.task('minify', function() {
  gulp.src('./src/github-btn.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeOptionalTags: true
    }))
    .pipe(gulp.dest('./'))
});

// Default Task
gulp.task('default', ['minify']);
