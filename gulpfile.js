'use strict';

let gulp = require('gulp');
let babel = require('gulp-babel');

gulp.task('scripts', function () {
  return gulp.src('public/scripts/src/app.js')
    .pipe(babel())
    .pipe(gulp.dest('public/scripts/dist'));
});

gulp.task('watch', function() {
  gulp.watch('public/scripts/src/app.js', ['scripts']);
});

gulp.task('default', ['scripts']);
