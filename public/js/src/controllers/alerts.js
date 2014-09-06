'use strict';

angular.module('octobox.alerts').controller('AlertsManagerController', ['$scope', 'AlertsManager', function ($scope, AlertsManager) {

    $scope.alerts = AlertsManager.alerts;

    $scope.reset = function() {
        AlertsManager.clearAlerts();
    };
  }
]);
