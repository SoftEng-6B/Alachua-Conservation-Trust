'use strict';

angular.module('core').directive('offCanvasMenu', function ($stateParams) {
  var bFeature = $stateParams.boundaryFeature;
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element) {
            scope.isMenuOpen = false;
            scope.toggleMenu = function () {
                scope.isMenuOpen = !scope.isMenuOpen;
            };
        }
    };
});