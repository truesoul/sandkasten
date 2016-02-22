(function() {
    'use strict';
    angular.module('myApp.mtagUpperCaseFilter', [])
        .filter('mtagUpperCase', mtagUpperCaseFilter);

    function mtagUpperCaseFilter() {
        return function(input){
            if(!input) return input;

            return input.toString().toUpperCase();
        }
    }
})();