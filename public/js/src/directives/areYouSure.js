'use strict';

angular.module('octobox.directives').directive('areYouSure', [
    '_',
    function (_) {
        return {
            restrict: 'A',
            templateUrl: '../views/directives/areYouSure.html',
            scope: {
                action: '&',
                actionName: '@',
                hide: '&'
            },
            // link: function(scope, element, attrs) {
            //
            // }
        }
    }
]);
