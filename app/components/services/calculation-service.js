(function() {
    'use strict';
    angular.module('myApp.mtagCalculationService', [])
        .factory('MtagCalculationService', mtagCalculationService);

    function mtagCalculationService() {
        var service = {
            addition: function (valueOne, valueTwo) {
                return Number(valueOne) + Number(valueTwo);
            },
            subtraktion: function (valueOne, valueTwo) {
                return Number(valueOne) - Number(valueTwo);
            },
            multiplikation: function (valueOne, valueTwo) {
                return Number(valueOne) * Number(valueTwo);
            },
            division : function (valueOne, valueTwo) {
                return Number(valueOne) / Number(valueTwo);
            }
        };
        return service;
    }
})();