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

gulp.task('test', function(done) {
  startTests(true /*singleRun*/ , done);
});

/**
 * Start the tests using karma.
 * @param  {boolean} singleRun - True means run once and end (CI), or keep running (dev)
 * @param  {Function} done - Callback to fire when karma is done
 * @return {undefined}
 */
function startTests(singleRun, done) {
    var child;
    var excludeFiles = [];
    var KarmaServer = require('karma').Server;

    new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        exclude: excludeFiles,
        singleRun: !!singleRun
    }, karmaCompleted).start();

    ////////////////

    function karmaCompleted(karmaResult) {
        console.log('Karma completed');
        if (child) {
            console.log('shutting down the child process');
            child.kill();
        }
        if (karmaResult === 1) {
            done('karma: tests failed with code ' + karmaResult);
        } else {
            done();
        }
    }
}
