module.exports = function(params) {
  console.log(params);
  var client = './';
  var clientApp = client + 'app/';
  var report = './report/';
  var root = './';
  var specRunnerFile = 'specs.html';
  var temp = './.tmp/';
  var nodeModules = 'node_modules';

  var config = {
    karma: getKarmaOptions()
  }

  return config;

  ////////////////

  function getKarmaOptions() {
    var options = {
      files: [].concat(
        nodeModules + '/angular/angular.js',
        nodeModules + '/angular-ui-router/release/angular-ui-router.js',
        nodeModules + '/angular-mocks/angular-mocks.js',
        clientApp + '**/*.module.js',
        clientApp + '**/*.js'
      ),
      exclude: [],
      coverage: {
        dir: report + 'coverage',
        reporters: [
          // reporters not supporting the `file` property
          {
            type: 'html',
            subdir: 'report-html'
          }, {
            type: 'lcov',
            subdir: 'report-lcov'
          }, {
            type: 'text-summary'
          } //, subdir: '.', file: 'text-summary.txt'}
        ]
      },
      preprocessors: {}
    };
    options.preprocessors[clientApp + '**/!(*.spec)+(.js)'] = ['coverage'];
    return options;
  }
};
