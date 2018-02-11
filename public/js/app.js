var debug = function() { console.log('%c' + arguments[0], 'background: rgba(191,255,56,1); color: rgba(0,0,0,1)', arguments[2] ? arguments : arguments[1] || ''); };

(function(){
'use strict';

  angular
    .module('tomselleckApp', [
      'ui.router',
      'ngMaterial',
      'MainController',
      'MainFactory',
      'MainService',
      'MainDirective'
    ])
    .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $stateProvider
        .state('tom', {
          url: '/',
          templateUrl: 'templates/main.html',
          controller: 'MainController',
          controllerAs: 'vm'
        });
      $urlRouterProvider.otherwise('/');
    }
  })();
