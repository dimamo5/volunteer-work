var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

gulp.task('default', function () {
    options = {
        ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false
        batch : ['./src/partials'],
    }

    return gulp.src('src/*.hbs')
        .pipe(handlebars({}, options))
        .pipe(rename({extname: ".html"}))
        .pipe(gulp.dest('.'));
});