/**
 * MainFactory Factory
 *
 * @description Factory for Factories
 */
(function(){
'use strict';


  function MainFactory($mdSidenav, $http) {

    return {
      toggleSidenav: toggleSidenav,
      closeSidenav: closeSidenav,
      sendit: sendit
    };

    function toggleSidenav(componentId) {
      $mdSidenav(componentId)
        .toggle()
        .then(function() {
        });
    }

    function closeSidenav(componentId) {
      $mdSidenav(componentId)
        .close()
        .then(function() {
          debug("close factory: toggle sidenav -> ", componentId);
        });
    }

    function sendit() {
      return $http.get('/getselleck');
    }

  }

  angular
  .module('MainFactory', [])
  .factory('MainFactory', MainFactory);

})();
