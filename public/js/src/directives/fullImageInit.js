'use strict';

angular.module('octobox.directives').directive('fullImageInit', [
    '$window',
    '_',
    function ($window, _) {
        return {
            restrict: 'A',
            templateUrl: '../views/directives/fullimage.html',
            link: function(scope, element, attrs) {
                var windowEl = angular.element($window);
                // find image
                var image = angular.element(document.getElementById('image-preview'));
                var cssClass = attrs.loadedclass;

                scope.zoomEnabled = false;
                scope.fullViewEnabled = false;
                scope.toggleFullView = function () {
                  // return if zoom isnt available
                  if (!scope.zoomEnabled)
                    return;

                  scope.fullViewEnabled = !scope.fullViewEnabled;
                }

                // handler calculates percent size and sets
                // zoomEnabled to true/false depending on value
                var handler = function() {
                  // dont set if zoom is enabled
                  if (scope.fullViewEnabled)
                    return;

                  // set percent size and apply to refresh
                  scope.file.percentSize = Math.round(
                    (window.document.getElementById('image-preview').clientHeight /
                     window.document.getElementById('image-preview').naturalHeight) * 100);

                  // if file is zoomed out - enable zoom
                  if (scope.file.percentSize < 100)
                    scope.zoomEnabled = true;
                  else
                    scope.zoomEnabled = false;
                };

                // add 'loaded' class and calculate size once on file load
                image.bind('load', function (e) {
                    angular.element(image).addClass(cssClass);
                    scope.$apply(handler);
                });

                // bind size recalculation to window resize with 350ms limit
                var handlerThrottled = _.throttle(handler, 150, true);
                windowEl.on('resize', scope.$apply.bind(scope, handlerThrottled));
                var watchZoomState = scope.$watch('fullViewEnabled', function () {
                  scope.$apply.bind(scope, handler);
                });
                // clean bindings on modal close
                scope.$on('$destroy', function () {
                  windowEl.off('resize', scope.$apply.bind(scope, handlerThrottled));
                  watchZoomState();
                });
            }
        }
    }
]);
