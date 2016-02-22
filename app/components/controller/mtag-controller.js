(function() {
    'use strict';
    angular.module('myApp.mtagController', [])
        .controller('mtagController', mtagController);

    function mtagController($scope, $http, MtagCalculationService) {
        $scope.filterExampleArray = ['1', '2', '3', 'A'];

        $scope.accept = function(item){
            if(!item)
                return false;

            var regex = new RegExp('[0-9]', 'g');
            return regex.test(item);
        };

        function calculation(){
            var result = MtagCalculationService.addition(1, 2);
            result = MtagCalculationService.multiplikation(result, 5);
            result = MtagCalculationService.division(result, 2);
            result = MtagCalculationService.subtraktion(result, 1);
            console.log(result);
        }

        calculation();

    }
})();
