(function() {
    'use strict';
    angular.module('myApp.mtagControllerOne', [])
        .controller('mtagControllerOne', function ($scope) {
            $scope.oneCtrl = this;
            var oneCtrl = this;

            oneCtrl.name = "One";
        });
})();


