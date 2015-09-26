const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('scripts', () => {
  const brwsrfy = browserify({
    entries: './public/scripts/src/app.js',
    debug: true,
    transform: [babelify],
  });
  return brwsrfy.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./public/scripts/dist'));
});

gulp.task('watch', () => {
  gulp.watch('public/scripts/src/**/*.js', ['scripts']);
});

gulp.task('default', ['scripts']);
