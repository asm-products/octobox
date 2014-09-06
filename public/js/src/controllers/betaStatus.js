'use strict';

angular.module('octobox.betastatus').controller('BetaStatusController', ['_', '$scope', 'BetaStatus', 'Global', 'User', function (_, $scope, BetaStatus, Global, User) {
  $scope.global = Global;

  BetaStatus.get(function (data) {
    $scope.betaStatus = data;

    // if user already read the status then default the count to 0
    if ($scope.global.user.betaReadVersion && $scope.betaStatus.version === $scope.global.user.betaReadVersion) {
      $scope.betaStatus.changeCount = {
        'true': '0'
      };
    } else {
      // Count changes by going through each feature and checking for 'changed' attribute being true
      $scope.betaStatus.changeCount = _.countBy(data.features, function (feature) {
            return feature.changed !== undefined && feature.changed === true;
      });
    }
  });

  $scope.statusClass = function (status) {
    return 'status-' + Math.round(status/20);
  };

  // Show beta modal and update user read status if necessary
  $scope.showBetaModal = function () {
    $scope.showBetaStatus = !$scope.showBetaStatus;

    // if status is unread
    if ($scope.global.user.betaReadVersion === undefined || $scope.betaStatus.version !== $scope.global.user.betaReadVersion) {
      var user = new User({
        '_id': $scope.global.user._id,
        'email': $scope.global.user.email
      });
      user.betaReadVersion = $scope.betaStatus.version;
      Global.user.betaReadVersion = $scope.betaStatus.version;
      user.$updateBetaStatus(function() {
        // success
      }, function() {
        // fail
      });
    }
  };

  $scope.toggleBetaStatus = function (event) {
    var element = angular.element(document.querySelector( '#beta-status-list' ));
    var isChild = element.find(event.target.tagName).length > 0;
    var isSelf = element[0] == event.target;
    var isIgnored = isChild || isSelf;
    if (!isIgnored) {
      // on close toggle show
      $scope.showBetaStatus = !$scope.showBetaStatus;
      // and set count to 0
      if ($scope.betaStatus.changeCount.true !== undefined && $scope.betaStatus.changeCount.true !== '0')
        $scope.betaStatus.changeCount = { 'true': '0' };

      $scope.$apply();
    }
  };

  }
]);
