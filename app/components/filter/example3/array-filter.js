(function() {
    'use strict';
    angular.module('myApp.mtagArrayFilter', [])
        .filter('mtagArrayFilter', mtagArrayFilter);

    function mtagArrayFilter() {
        return function(array, fnc){
            if(!array) return array;
            var result = [];
            if(angular.isArray(array)){
                angular.forEach(array, function (value) {
                    console.log(fnc);
                    if(angular.isFunction(fnc)){
                        if(fnc(value)){
                            result.push(value);
                        }
                    } else {
                        result.push(value);
                    }
                });
            }
            return result;
        }
    }
})();