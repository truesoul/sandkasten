(function() {
    'use strict';
    angular.module('myApp.mtagController', [])
        .controller('mtagController', mtagController);

    function mtagController($scope) {
        $scope.filterExampleArray = ['1', '2', '3', 'A'];

        $scope.accept = function(item){
            if(!item)
                return false;

            var regex = new RegExp('[0-9]', 'g');
            return regex.test(item);
        }
    }
})();
