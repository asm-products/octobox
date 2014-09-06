'use strict';

angular.module('octobox.directives').directive('imageloaded', [
    function () {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var cssClass = attrs.loadedclass;
                element.bind('load', function (e) {
                    angular.element(element).addClass(cssClass);
                });
            }
        }
    }
]);
