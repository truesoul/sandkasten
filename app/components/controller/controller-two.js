(function() {
    'use strict';
    angular.module('myApp.mtagControllerTwo', [])
        .controller('mtagControllerTwo', controller);

    function controller($scope) {
        $scope.twoCtrl = this;
        var twoCtrl = this;

        twoCtrl.name = "Two";
    }
})();
