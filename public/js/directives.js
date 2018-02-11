/**
 * mainDirective Directive
 *
 * @description Controller for templates/index.html
 */
(function(){
'use strict';

  function mainDirective() {

    var vm = this;

    vm.greeting = 'Get Sellecked!';

  }

  angular
  .module('MainDirective', [])
  .directive('mainDirective', mainDirective);
})();
