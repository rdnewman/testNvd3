(function() {
     function config($stateProvider, $locationProvider) {
       $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });

       $stateProvider
          .state('testing', {
            url: '/',
            controller: 'TestingCtrl as testing',
            templateUrl: '/templates/testing.html'
          });
     }

     angular
       .module('testNvd3', ['nvd3', 'ui.router'])
       .config(config);
 })();
