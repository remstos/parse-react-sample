var browserSync = require('browser-sync').create();
var gulp        = require('gulp');
var config      = require('../config').browserSync;

gulp.task('browserSync', ['build'], function() {
  browserSync.init(['build/**'], {
		server: {
			baseDir: './build'
		}
	});
});
