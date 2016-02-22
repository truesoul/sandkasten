(function() {
    'use strict';
    angular.module('myApp.mtagRegexFilter', [])
        .filter('mtagRegex', mtagRegexFilter);

    function mtagRegexFilter() {
        return function(input, search, replace){
            if(!input) return input;

            return input.replace(RegExp(search, 'g'), replace);
        }
    }
})();