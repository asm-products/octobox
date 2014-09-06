angular.module('octobox.directives').directive('clickToEdit', ['$window', '$location', '$document', '$rootScope', 'AlertsManager', function($window, $location, $document, $rootScope, AlertsManager) {
    return {
        restrict: "A",
        replace: true,
        templateUrl: "../views/directives/clickToEdit.html",
        scope: {
            value: "=clickToEdit",
            callback: '&',
            kind: '=',
            emptyState: '@'
        },
        controller: function($scope, $element) {
            // click outside to close!
            var onDocumentClick = function($event){
              $scope.isChild = $element.find($event.target.tagName).length > 0;
              $scope.isSelf = $element[0] == $event.target;
              $scope.isInside = $scope.isChild || $scope.isSelf;

              if($scope.view.editorEnabled && !$scope.isChild) {
                $scope.$apply($scope.disableEditor());
              }
            };
            var checkIfLink = function () {
              if ($scope.emptyState) {
                if ($scope.value && $scope.value !== null && $scope.value.match(/^(https?:\/\/)/)) {
                  $scope.sourceLink = true;
                } else {
                  $scope.sourceLink = false;
                }
              }
            };
            $scope.view = {
                editableValue: $scope.value,
                editorEnabled: false,
                loadingResults: false, // loading state
                sourceLink: false // is source a link? - defaults to false
            };

            // handle source link
            checkIfLink();

            $scope.openSourceLink = function (link) {
              console.log(link);
              $window.open(link);
            };

            $scope.enableEditor = function() {
                $scope.view.editorEnabled = true;
                $scope.view.editableValue = $scope.value;
                $document.on("click", onDocumentClick);
            };

            $scope.disableEditor = function() {
                $scope.view.editorEnabled = false;
                $scope.view.loadingResults = false;
                $document.off("click", onDocumentClick);
            };

            $scope.save = function() {
                $scope.view.loadingResults = true;
                // emit event and listen for 'save' event from model?
                $scope.callback({
                  newName: $scope.view.editableValue,
                  cb: function(err, noChange, parentCollection, nameOnly) {
                    // message friendly kind
                    var kind = $scope.kind.substring(0,1).toUpperCase() + $scope.kind.substring(1);
                    // Error means tag/stack/collection with new name already exists
                    if (err){
                      AlertsManager.addAlert( kind + ' \'' + $scope.view.editableValue + '\' already exists. Pick a different name', 'alert-warning', 1500);
                      $scope.disableEditor();
                      return;
                    }

                    if (noChange){ // if content is unchanged
                      $scope.disableEditor();
                      return;
                    }

                    $scope.disableEditor();

                    $scope.value = $scope.view.editableValue;

                    if ($scope.emptyState) {
                      checkIfLink();
                    }

                    // if it's stack/collection/tag then redirect to new location
                    if ($scope.kind !== 'file' && $scope.kind !== 'user'){
                        // refresh sidebar
                        $rootScope.$emit('refreshSidebar'); // updates favourites, tags and collection list
                        // redirect to new location
                        if (parentCollection){ // if stack is renamed
                          $location.path($scope.kind + '/' + parentCollection + '/' + $scope.view.editableValue.toLowerCase());
                        } else {
                          $location.path($scope.kind + '/' + $scope.view.editableValue.toLowerCase());
                        }
                        $location.replace(); // remove old name in browser history
                    }
                    return;
                  }
                });
            };
        }
    };
}]);
