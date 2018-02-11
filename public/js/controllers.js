/**
 * MainController Controller
 *
 * @description Controller for templates/index.html
 */
(function(){
'use strict';

  function MainController(MainFactory, $timeout) {

    var vm = this;

    vm.toolbarHeader = 'Get Sellecked!';
    vm.itSellee = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlNlncpzruNghvsxIpHh_UN0kdVF3Ak_l7eBylu13CZywHfMec0A';
    vm.toggleSelleeSideNav = toggleSelleeSideNav;
    vm.getSellecked = getSellecked;

    function toggleSelleeSideNav(id) {
      debug("toggleSelleeSideNav ->", 'toggleSelleeSideNav');
      MainFactory.toggleSidenav(id);
      $timeout(function() {
        MainFactory.closeSidenav(id);
      }, 2000);
    }

    function getSellecked() {
      MainFactory.sendit().then(function(res) {
        console.log(res);
        vm.itSellee = res.data;
      });
    }

  }

  angular
  .module('MainController', [])
  .controller('MainController', MainController);
})();
