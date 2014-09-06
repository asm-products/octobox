'use strict';

angular.module('octobox.filters').controller('FiltersController', ['$scope', '$rootScope', '$location', '$window', '_', 'Global', 'Tags', 'Collections', 'Stacks', 'Modal', function ($scope, $rootScope, $location, $window, _, Global, Tags, Collections, Stacks, Modal) {
    $scope.global = Global;
    $scope.modal = Modal;

    $scope.toggleSidebar = function () {
      $rootScope.foldSidebar = !$rootScope.foldSidebar;
    };

    // sort date
    $scope.global.selectSort = [
      {
        name: 'Modified',
        sortby: 'modified',
        reverse: true
      },
      {
        name: 'Created',
        sortby: 'created',
        reverse: true
      },
      {
        name: 'Name A-Z',
        sortby: 'path',
        reverse: false
      },
      {
        name: 'Name Z-A',
        sortby: 'path',
        reverse: true
      },
    ];
    $scope.global.activeSort = $scope.global.selectSort[0];

    // show items
    // $scope.global.selectFilter = [
    //   {
    //     name: 'All',
    //     show: 'all'
    //   },
    //   {
    //     name: 'Stacks',
    //     show: 'stack'
    //   },
    //   {
    //     name: 'Images',
    //     show: 'image'
    //   },
    //   {
    //     name: 'GIFs',
    //     show: 'gif'
    //   },
    //   {
    //     name: 'Notes',
    //     show: 'note'
    //   },
    //   {
    //     name: 'Links',
    //     show: 'link'
    //   },
    //   {
    //     name: 'Other',
    //     show: 'other'
    //   },
    // ];
    // // $scope.global.activeFilter = $scope.global.selectFilter[0];
    $scope.$watch('global.activeView.kind', function() {
      if ($scope.global.activeView.kind === 'stack') {
        $scope.activeMoreMenu = $scope.stackMoreMenu;
        $scope.moreMenuDisabled = false;
      } else if ($scope.global.activeView.kind === 'collection') {
        $scope.activeMoreMenu = $scope.collectionMoreMenu;
        $scope.moreMenuDisabled = false;
      } else if ($scope.global.activeView.kind === 'tag') {
        $scope.activeMoreMenu = $scope.tagMoreMenu;
        $scope.moreMenuDisabled = false;
      } else {
        $scope.moreMenuDisabled = true;
      }
    });

    $scope.collectionMoreMenu = [
        {
            text: 'Share',
            iconCls: 'more-share'
        },
        {
            divider: true
        },
        {
            text: 'Delete',
            iconCls: 'more-delete'
        },
    ];

    $scope.stackMoreMenu = [
        {
            text: 'Share',
            iconCls: 'more-share'
        },
        {
            text: 'Move',
            iconCls: 'more-move'
        },
        {
            divider: true
        },
        {
            text: 'Delete',
            iconCls: 'more-delete'
        },
    ];
    $scope.tagMoreMenu = [
        {
            text: 'Delete',
            iconCls: 'more-delete'
        },
    ];


    $scope.filtersMoreMenuSelected = {}; // Must be an object

    $scope.editContent = function (selected) {
      if (selected.iconCls === 'more-share') {
        $scope.modal.open('/views/directives/share.html', $scope.global.activeView, 'narrow');
      } else if (selected.iconCls === 'more-delete') {
        $scope.modal.open('/views/directives/delete.html', $scope.global.activeView);
      } else if (selected.iconCls === 'more-move') {
        $scope.modal.open('/views/directives/moveStack.html', $scope.global.activeView);
      }
    };

}]);
