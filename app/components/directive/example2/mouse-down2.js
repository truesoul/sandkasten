(function() {
    'use strict';
    angular.module('myApp.mtagMouseDown2', [])
        .directive('mtagMouseDown2', mouseDownDirective);

    function mouseDownDirective() {
        return {
            restrict: 'A',
            scope: {
              callback: '&onCallback'
            },
            link: function(scope, elm, attrs) {
                var outerFn = scope.$eval(attrs.mtagMouseDown);
                elm.bind('mousedown', function(evt){
                    console.log("mousedown 2");
                    scope.callback({arg1: "HO"});
                });
            }
        }
    }
})();