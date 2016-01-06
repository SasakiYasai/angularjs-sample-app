var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('start', ['start-webserver']);

gulp.task('start-webserver', function() {
  console.log('Starting web server for angular1 at http://localhost:8001/');

  gulp.src('./')
    .pipe(webserver({
      port: 8001
    }));
});
