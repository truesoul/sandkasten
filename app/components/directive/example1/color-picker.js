(function() {
  'use strict';
  angular.module('myApp.mtagColorPicker', ['ngRoute'])
      .directive('mtagColorPicker', colorPickerDirective);

  function colorPickerDirective() {
    return {
      restrict: 'E',
      /*scope: {
          r: '@',
          g: '@',
          b: '@'
      },*/
      templateUrl: './components/directive/example1/color-picker.html',
      controller: function ($scope) {
        $scope.r = $scope.r || Math.random() * 255;
        $scope.g = $scope.g || Math.random() * 255;
        $scope.b = $scope.b || Math.random() * 255;
      }
    }
  }
})();