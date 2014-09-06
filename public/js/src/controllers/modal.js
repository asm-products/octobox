'use strict';

angular.module('octobox.modal').controller('ModalController', ['$scope', '$element', 'Modal', function ($scope, $element, Modal) {
    $scope.modal = Modal;

    // close modal on view change
    $scope.$on('$destroy', function() {
      $scope.modal.close();
    });
    
    // Close with ESC - works only once :<
    // $element.bind("keydown keypress", function (event) {
    //   if(event.which === 27) {
    //     $scope.$apply(function (){
    //       $scope.$eval($scope.modal.close());
    //     });
    //     event.preventDefault();
    //   }
    // });
}]);
