'use strict';

angular.module('octobox.system').controller('HeaderController', ['$scope', '$rootScope', '$location', '$window', '_', 'Global', 'Tags', 'Collections', 'Stacks', 'Modal', function ($scope, $rootScope, $location, $window, _, Global, Tags, Collections, Stacks, Modal) {
    $scope.global = Global;
    $scope.activeView = Global.activeView;
    $scope.modal = Modal;
    $scope.scroll = 0;

    $scope.toggleClass = function () {
      $rootScope.headerDominates = true;
      $scope.$apply();
    };

    // make local of activeView when it changes
    $scope.$watch('global.activeView.name', function() {
        $scope.activeView = Global.activeView;
        // Add Dropdown with dynamic name
        if ($scope.activeView.kind === 'tag'){
            $scope.addMenu = [
                {
                    text: 'Add to Inbox'
                },
                {
                    divider: true
                },
                {
                    text: 'Note & To-do',
                    iconCls: 'add-note'
                },
                {
                    divider: true
                },
                {
                    text: 'Site Link',
                    iconCls: 'add-link'
                },
                {
                    divider: true
                },
                {
                    text: 'Add Files',
                    iconCls: 'add-files'
                }
            ];
        } else if ($scope.activeView.name === 'Recent Items' || $scope.activeView.name === 'Inbox') {
            $scope.addMenu = [
                {
                    text: 'Add to Inbox'
                },
                {
                    divider: true
                },
                {
                    text: 'Note & To-do',
                    iconCls: 'add-note'
                },
                {
                    divider: true
                },
                {
                    text: 'Site Link',
                    iconCls: 'add-link'
                },
                {
                    divider: true
                },
                {
                    text: 'Add Files',
                    iconCls: 'add-files'
                }
            ];
        } else if ($scope.activeView.kind === 'stack'){
            $scope.addMenu = [
                {
                    text: 'Add to ' + $scope.activeView.name
                },
                {
                    divider: true
                },
                {
                    text: 'Note & To-do',
                    iconCls: 'add-note'
                },
                {
                    divider: true
                },
                {
                    text: 'Site Link',
                    iconCls: 'add-link'
                },
                {
                    divider: true
                },
                {
                    text: 'Add Files',
                    iconCls: 'add-files'
                },
            ];
        } else {
            $scope.addMenu = [
                {
                    text: 'Add to ' + $scope.activeView.name
                },
                {
                    divider: true
                },
                {
                    text: 'Note & To-do',
                    iconCls: 'add-note'
                },
                {
                    divider: true
                },
                {
                    text: 'Site Link',
                    iconCls: 'add-link'
                },
                {
                    divider: true
                },
                {
                    text: 'Add Files',
                    iconCls: 'add-files'
                },
                {
                    divider: true
                },
                {
                    text: 'Empty Stack',
                    iconCls: 'add-stack'
                },
            ];
        }
    });


    $scope.addMenuSelected = {}; // Must be an object

    $scope.addContent = function (selected) {
      var destinationName = $scope.activeView.name;
      if ($scope.activeView.path === '/')
        destinationName = 'Inbox';

      if (selected.iconCls === 'add-note') {
        $scope.modal.open('/views/directives/add/note.html');
      } else if (selected.iconCls === 'add-link') {
        $scope.modal.open('/views/directives/add/link.html');
      } else if (selected.iconCls === 'add-stack') {
        $scope.modal.open('/views/directives/add/stack.html');
      } else {
        $scope.modal.open('/views/directives/add/files.html', destinationName);
      }
    };

    // scroll to top of page
    $scope.gotoTop = function (){
        $window.scrollTo(-65, 0);
      };

    // handle renaming the item
    // passes result to directive, but does the API work here
    $scope.renameItem = function(newName, cb) {
        var kind = $scope.activeView.kind; // 'collection', 'stack', 'tag'
        // if name wasnt changed or is empty, skip saving
        if (!newName || $scope.activeView.name === newName)
            return cb(undefined, true); // err - undefined; noChange - true

        //
        // Rename tag
        if (kind === 'tag'){
            var tag = new Tags($scope.activeView);
            tag = _.extend(tag, {
                name: newName
            });
            tag.$update(function() {
                // emit tag refresh
                $rootScope.$emit('refreshTags');
                return cb();
            }, function() { // pass error if tag with new name already exists (handled in directive)
                return cb(true);
            });
        } else
        //
        // Rename collection
        if (kind === 'collection'){
            var collection = new Collections($scope.activeView);
            // save old path
            collection.oldPath = collection.path;
            // push new name and path
            collection = _.extend(collection, {
                name: newName,
                path: '/' + newName.toLowerCase()
            });
            // if new name is the same lower case, update name only
            if (newName.toLowerCase() === $scope.activeView.name.toLowerCase()){
                collection.$update({
                    path: collection.path.substring(1) // skip slash
                }, function() {
                    return cb();
                }, function(err) { // pass error if collection exists (or something else is wrong?)
                    return cb(err);
                });
            } else {
                collection.$move(function() {
                    return cb();
                }, function(err) { // pass error if collection exists (or something else is wrong?)
                    return cb(err);
                });
            }

        } else

        //
        // Rename stack
        if (kind === 'stack'){
            // initialize new path
            var newPath = newName.toLowerCase();
            // check if new name has any slashes
            if (/\//g.test(newPath)) {
                // replace all slashes with colons, just like dropbox does
                newPath = newPath.replace(/\//g, ':');
            }
            var stack = new Stacks($scope.activeView);
            // save old path
            stack.oldPath = stack.path;
            // get root from old path for constructing new one
            var pathRoot = stack.oldPath.match(/^(\/[^[\/]+\/)/);
            // append root to newPath
            newPath = pathRoot[1] + newPath;
            // split newPath by slashes so we can pass collection & stack to $resource
            var reqPath = stack.oldPath.split('/');
            // push new name and path
            stack = _.extend(stack, {
                name: newName,
                path: newPath,
                user: Global.user._id
            });
            // if new name is the same lower case, update name only
            if (newName.toLowerCase() === $scope.activeView.name.toLowerCase()){
                // console.log('capitalize');
                stack.$update({
                    collection: reqPath[1],
                    stack: reqPath[2]
                }, function() {
                    return cb(undefined, undefined, reqPath[1]);
                }, function(err) { // pass error if collection exists (or something else is wrong?)
                    return cb(err);
                });
            } else {
                stack.$move({
                    collection: reqPath[1],
                    stack: reqPath[2]
                }, function() {
                    return cb(undefined, undefined, reqPath[1]);
                }, function(err) { // pass error if collection exists (or something else is wrong?)
                    return cb(err);
                });
            }
        }
    };

    // handle Favourites remotely
    $scope.toggleFavourite = function(item) {
      if (item.isFavourite) {
        $rootScope.$emit('removeFavourite', item);
      } else {
        $rootScope.$emit('addFavourite', item);
      }
    };

    // extract and go to parent route
    $scope.backOrRoot = function(path) {
      if ($scope.activeView.tags !== undefined) {
        var parsedPath = path.match(/^\/(.+)/);
        var pathElts = parsedPath[1].split('\/');
        // if inbox
        if (pathElts.length === 1)
            $location.path('/inbox');
        // if collection
        if (pathElts.length === 2)
            $location.path('/collection/' + pathElts[0]);
        // if stack
        if (pathElts.length === 3)
            $location.path('/stack/' + pathElts[0] + '/' + pathElts[1]);
      } else {
        $location.path('/inbox');
      }

    };
  }
]);
