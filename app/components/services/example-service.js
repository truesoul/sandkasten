(function() {
    'use strict';
    // FACTORY
    angular.module('myApp.mtagExample1Service', [])
        .factory('MtagExample1Service', mtagExample1Service);

    function mtagExample1Service() {
        var service = {
            getAll: function () {
                return [1, 2, 3];
            }
        };
        return service;
    }

    // SERVICE
    angular.module('myApp.mtagExample2Service', [])
        .service('MtagExample2Service', mtagExample2Service);

    function mtagExample2Service() {
        this.getAll2 = function(){
            return [1, 2, 3];
        }
    }

    // PROVIDER
    angular.module('myApp.mtagExample3Service', [])
        .provider('MtagExample3Service', mtagExample3Service);

    function mtagExample3Service(){
        this.$get = function() {
            return {
                getAll3: function() {
                    return [1, 2, 3];
                }
            };
        };
    }
})();