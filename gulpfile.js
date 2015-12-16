var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('start', ['start-webserver']);

gulp.task('start-webserver', function() {
  console.log('Starting web server for angular1 at http://localhost:8001/');
  console.log('Starting web server for angular2 at http://localhost:8002/');

  gulp.src('angular1')
    .pipe(webserver({
      port: 8001
    }));

  gulp.src('angular2')
    .pipe(webserver({
      port: 8002
    }));
});
