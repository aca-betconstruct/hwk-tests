const gulp = require('gulp'),
  sassLint = require('gulp-sass-lint'),
  sass = require('gulp-sass');

gulp.task('lint:styles', () => {
  return gulp.src(['**/*.scss'])
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('sass', function () {
  return gulp.src('**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('**/*.scss', ['sass']);
});

