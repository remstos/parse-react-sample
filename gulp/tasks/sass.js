var gulp = require('gulp');
var sass = require('gulp-sass');
var handleErrors = require('../util/handleErrors');
var config=require('../config').sass;

gulp.task('sass', ['fonts', 'images'], function () {
  
  gulp.src(config.src)
        .pipe(sass())
        .on('error', handleErrors)
        .pipe(gulp.dest(config.dest));
        

});
