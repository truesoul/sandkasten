(function() {
  'use strict';
  angular.module('myApp.mtagColorPicker', ['ngRoute'])
      .directive('mtagColorPicker', colorPickerDirective);

  function colorPickerDirective() {
    return {
      restrict: 'E',
      templateUrl: './components/directive/example1/color-picker.html',
      controller: function ($scope) {

      }
    }
  }
})();