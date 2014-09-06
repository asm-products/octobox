'use strict';

angular.module('octobox.system').controller('MainController', ['$scope', 'Global', function ($scope, Global) {
  $scope.global = Global;

}]);
