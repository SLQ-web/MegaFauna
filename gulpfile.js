var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var gulpIf = require('gulp-if');
var useref = require('gulp-useref');

// Gulp watch syntax (watching for changes to CSS/JS files)
gulp.task('watch', function(){
    gulp.watch('source/css/**/*.css', ['useref']); //watches for changes to css files
    gulp.watch('source/js/**/*.js', ['useref']); //watches for changes to js files
})

gulp.task('useref', function(){
  return gulp.src('source/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify().on('error', gutil.log)))
    .pipe(gulpIf('*.css', cssnano().on('error', gutil.log)))
    .pipe(gulp.dest('dist'))
});
