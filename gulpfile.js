'use strict';

let gulp = require('gulp');
let browserify = require('browserify');
let babelify = require('babelify');
let source = require('vinyl-source-stream');
let buffer = require('vinyl-buffer');

gulp.task('scripts', function () {
  let b = browserify({
    entries: './public/scripts/src/app.js',
    debug: true,
    transform: [babelify]
  });
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./public/scripts/dist'));
});

gulp.task('watch', function() {
  gulp.watch('public/scripts/src/app.js', ['scripts']);
});

gulp.task('default', ['scripts']);
