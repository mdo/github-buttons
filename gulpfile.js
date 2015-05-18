var gulp         = require('gulp'),
    htmlmin      = require('gulp-htmlmin'),
    inlinesource = require('gulp-inline-source');

gulp.task('inlinesource', function () {
  return gulp.src('./src/github-btn.html')
    .pipe(inlinesource())
    .pipe(gulp.dest('./github-btn.html'));
});

// Minify HTML
gulp.task('minify', function() {
  gulp.src('./github-btn.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeOptionalTags: true
    }))
    // .pipe(gulp.dest('./'))
});

// Default Task
gulp.task('default', ['minify']);
