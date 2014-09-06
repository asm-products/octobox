'use strict';

angular.module('octobox.system').controller('SidebarController', ['$scope', '$rootScope', '$location', 'Global', 'Modal', 'FileModal', function ($scope, $rootScope, $location, Global, Modal, FileModal) {

    // $scope.global = Global;
    $scope.modal = Modal;
    $scope.filemodal = FileModal;

    $scope.isCollapsed = false;

    $scope.toggleClass = function () {
      $rootScope.headerDominates = false;
      $scope.$apply();
    };

    // user Dropdown
    $scope.userMenu = [
        // {
        //     text: 'Other account stuff',
        //     href: ''
        // },
        {
            text: 'Account Settings',
            iconCls: 'account-settings'
        },
        {
            divider: true
        },
        {
            text: 'Sign Out',
            href: '/signout'
        }
    ];
    $scope.userMenuSelected = {}; // Must be an object

    // more Dropdown
    $scope.moreMenu = [
        // {
        //     text: 'Browser Extension',
        //     href: ''
        // },
        // {
        //     text: 'How to Save',
        //     href: ''
        // },
        // {
        //     text: 'Help',
        //     href: ''
        // },
        // {
        //     text: 'Guides',
        //     href: ''
        // },
        // {
        //     divider: true
        // },
        {
            text: 'About Octobox',
            href: 'http://useoctobox.com/'
        },
        {
            text: 'Twitter',
            href: 'http://twitter.com/octoboxapp'
        }
    ];
    $scope.moreMenuSelected = {}; // Must be an object

    $scope.openSettings = function (selected) {
      if (selected.iconCls === 'account-settings') {
        $scope.modal.open('/views/user/settings.html', $scope.global.activeView, 'wide');
      }
    };

    $scope.isActive = function(path) {
        if ($location.path().substr(0, path.length).toLowerCase() === path.toLowerCase())
            return true;
        else
            return false;
    };

}]);
