Package.describe({
  name: 'clinical:router-default-config',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('router-default-config.js');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:router-default-config');
});