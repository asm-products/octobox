angular.module('octobox.directives').directive('clickToAdd', ['$location', '$document', '$rootScope', 'AlertsManager', function($location, $document, $rootScope, AlertsManager) {
    return {
        restrict: "A",
        replace: true,
        templateUrl: "../views/directives/clickToAdd.html",
        scope: {
            value: "@clickToAdd",
            callback: '&callback',
            kind: '@kind'
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

            $scope.view = {
                editableValue: $scope.value,
                editorEnabled: false,
                loadingResults: false // loading state
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
                $scope.view.editableValue = null;
            };

            $scope.save = function() {
                $scope.view.loadingResults = true;
                // emit event and listen for 'save' event from model?
                $scope.callback({
                  name: $scope.view.editableValue,
                  cb: function(err, noChange) {
                    // capitalize kind
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

                    // Display success message
                    AlertsManager.addAlert( kind + ' \'' + $scope.view.editableValue + '\' created successfully', 'alert-success', 2500);

                    $scope.disableEditor();
                    $scope.value = $scope.view.editableValue;

                    // refresh sidebar
                    $rootScope.$emit('refreshSidebar'); // updates favourites, tags and collection list
                  }
                });

            };
        }
    };
}]);
