var gulp         = require('gulp'),
    htmlmin      = require('gulp-htmlmin'),
    inlinesource = require('gulp-inline-source'),
    rename       = require('gulp-rename');

// Inline CSS and JS
gulp.task('inlinesource', function (cb) {
  return gulp.src('./src/btn.html')
    .pipe(inlinesource())
    .pipe(rename('github-btn.html'))
    .pipe(gulp.dest('./'));

  cb(err);
});

// Minify HTML
gulp.task('minify', ['inlinesource'], function() {
  gulp.src('./github-btn.html')
    .pipe(htmlmin({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      minifyCSS: { advanced: false, compatibility: 'ie9' },
      minifyJS: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeOptionalAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    }))
    .pipe(gulp.dest('./'))
});

// Default Task
gulp.task('default', ['inlinesource', 'minify']);
