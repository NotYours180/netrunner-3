// Configure the AMD module loader
requirejs.config({
  // The path where your JavaScripts are located.
  baseUrl: 'js/',
  // Specify the paths of files outside the baseUrl.
  paths: {
    // Vendor paths.
    jquery: '../vendor/jquery',
    underscore: '../vendor/underscore',
    backbone: '../vendor/backbone',
    handlebars: '../vendor/handlebars',
    marionette: '../vendor/backbone.marionette',
    async: '../vendor/async',

    // Handlebars template loader/compiler.
    text: '../vendor/require-text',
    hbs: '../vendor/require-hbs',

    // Other directories.
    data: '../data',
    templates: '../templates'
  },
  // Underscore and Backbone are not AMD-capable per default,
  // so we need to use the AMD wrapping of RequireJS
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    marionette : {
      deps : ['backbone'],
      exports: 'Backbone.Marionette'
    },
    handlebars: {
      exports: 'Handlebars'
    },
    underscore: {
      exports: '_'
    }
  }
});