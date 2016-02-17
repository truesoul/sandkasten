(function() {
    'use strict';
    angular.module('myApp.mtagMouseDown', [])
        .directive('mtagMouseDown', mouseDownDirective);

    function mouseDownDirective() {
        return {
            restrict: 'A',
            link: function(scope, elm, attrs) {
                var outerFn = scope.$eval(attrs.mtagMouseDown);
                elm.bind('mousedown', function(evt){
                    console.log("mousedown");
                    scope.$apply(function() {
                        if(outerFn){
                            outerFn.call(scope, evt.which);
                        }
                    });
                });
            }
        }
    }
})();