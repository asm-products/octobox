'use strict';

angular.module('octobox.page').controller('TitleController', ['$scope', 'Page', function ($scope, Page) {
  $scope.Page = Page;
}]);
