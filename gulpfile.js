var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('sass', function() {
    return gulp.src('./scss/main.scss') //wskazujemy pliki ktore chcemy zeby były zamienione
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compact'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css')); //w które miejsce mają być stworzone pliki odnoscie css
});gulp.task('default', ['scss'],function(){
    gulp.watch('./scss/**/*.scss', ['scss']); ////które pliki chcemy nasłuchiwac ** wszystkie pliki nawet głębiej w plikach
});