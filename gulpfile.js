var gulp = require('gulp'),
//   minifyCss = require('gulp-minify-css'),
//   uglify = require('gulp-minify'),
    stylus = require('gulp-stylus'),
    mainBowerFiles = require('main-bower-files'),
    livereload = require('gulp-livereload'),
    prefixer = require('gulp-autoprefixer');

gulp.task('jsTask',function(){
    gulp.src('js/*.js')
        //  .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('cssTask', function () {
    gulp.src('style/style.styl')
        .pipe(stylus())
        .pipe(prefixer('last 15 versions'))
        //.pipe(minifyCss())
        .pipe(gulp.dest('app/style'))


});

gulp.task('bowerComponents',function(){
    return gulp.src(mainBowerFiles())
        .pipe(gulp.dest('app/includes'))
});

gulp.task('watch',function(){

    gulp.watch('js/*.js',['jsTask']);
    gulp.watch('style/*.styl',['cssTask']);
    gulp.watch('bower_components',['bowerComponents']);
});


gulp.task('default', ['jsTask','cssTask','bowerComponents','watch']);
