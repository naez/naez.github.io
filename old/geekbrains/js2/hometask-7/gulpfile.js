var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('sass', function() {
    return gulp.src('src/sass/*.+(sass|scss)')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
      .pipe(concat('scripts.min.js'))

  // gulp-uglify Не работает с let выдает ошибку, пришлось их заменять на var *****

      .pipe(uglify().on('error', function (err) { console.log( err ) }))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
    gulp.watch('src/sass/*.+(sass|scss)', ['sass']);
    gulp.watch('src/js/*.js', ['scripts']);
});

gulp.task('default', ['sass', 'scripts', 'watch']);
