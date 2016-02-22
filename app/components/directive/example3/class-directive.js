(function() {
    'use strict';
    angular.module('myApp.mtagCustomClass', [])
        .directive('mtagCustomClass', mtagCustomClass);

    function mtagCustomClass() {
        return {
            restrict: 'C',
            // template: '<span>Ein Text</span>',
            link: function(scope, elm) {
                elm.css({color: 'red'});
            }
        }
    }
})();