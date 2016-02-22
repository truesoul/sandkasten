(function() {
    'use strict';
    angular.module('myApp.mtagConstantService', [])
        .constant('MtagConstantService', {HOST: 'localhost', PORT: '8080'}); // 'localhost:8080'

})();