const gulp = require("gulp");
const jshint = require('gulp-jshint');
const dirPath = './';
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('hello', function(done) {
    console.log('Hello gulp');
    done();
})

gulp.task('jshint', function(){
    return gulp.src(dirPath + 'js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter())
})

gulp.task("sass", function() {
    return gulp.src(dirPath +'scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'expanded',
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
    .pipe(gulp.dest(dirPath + 'css'))
})

gulp.task('watch', function() {
    gulp.watch(dirPath + 'scss/**/*.scss', gulp.series('sass'));
    //gulp.watch(dirPath + 'js/**/*.js', gulp.series('jshint'));
})