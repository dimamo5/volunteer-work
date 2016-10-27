var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var critical = require('critical').stream;

gulp.task('default', function () {
    options = {
        ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false
        batch : ['./src/partials'],
    }

    return gulp.src('src/*.hbs')
        .pipe(handlebars({}, options))
        //.pipe(critical({base: '.', inline: true, css: ['css/style.css']}))
        .pipe(rename({extname: ".html"}))
        .pipe(gulp.dest('.'));
});