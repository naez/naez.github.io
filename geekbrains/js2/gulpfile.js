var dist = 'hometask-3/';
// Подключаем Gulp
var gulp = require("gulp");
// Подключаем плагины Gulp
var sass = require("gulp-sass");

// Объединение, компиляция Sass в CSS, простановка венд. префиксов и дальнейшая минимизация кода
gulp.task("sass", function() {
    return gulp.src([dist+"sass/**/*.sass", dist+'sass/**/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest(dist+"css"));
});

// Задача слежения за измененными файлами
gulp.task("watch", function() {
    gulp.watch(["dist/sass/**/*.sass", 'dist/sass/**/*.scss'], ["sass"]);
});

// Запуск тасков по умолчанию
gulp.task("default", ["sass", "watch"]);
