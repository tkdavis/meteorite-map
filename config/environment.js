/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'meteorite-map',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

    /* 
       The following 2 children of the 'ENV' object are based off of the ember-google-map
       addon (provided by running 'ember install ember-google-map') wiki at
       https://github.com/huafu/ember-google-map/wiki/Configuration 
    */
  ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      //Added 'unsafe-inline' to get rid of console errors. It seems to render okay without so
      //we may be able to remove it in the future if it's a security problem.
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline' *.googleapis.com maps.gstatic.com",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self' maps.gstatic.com",
      'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com *.githubusercontent.com",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"
  };
  ENV.googleMap = {
      // your configuration goes here
      apiKey : 'AIzaSyBcIcoeFv6bDyZUz7eI-U42wqptWFrmj2A'
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
