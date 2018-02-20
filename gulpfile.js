const gulp = require('gulp'),
  sassLint = require('gulp-sass-lint');

gulp.task('lint:styles', () => {
  return gulp.src(['**/*.scss'])
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});
