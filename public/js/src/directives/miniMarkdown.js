'use strict';

angular.module('octobox.directives').directive('miniMarkdown', [
    '$compile',
    function ($compile) {
        return function(scope, element, attrs) {
            scope.$watch(
              function(scope) {
                 // watch the 'mini-markdown' expression for changes
                return scope.$eval(attrs.miniMarkdown);
              },
              function(excerpt) {
                // define regexes
                var rgHeader = /(#{1,}.+[^\n])/gm; // matches line with one or more '#'
                var rgStrong = /([*][*][^*]+[*][*])/gm; // matches text wrapped in **
                var rgItalic = /([^*][*][^*]+[*])/gm; // matches text wrapped in *
                var rgLink = /(https?:\/\/(www\.)?[-a-zA-Z0-9@:\%._\+~#=]{2,256}\.[a-z]{2,6}\b[-a-zA-Z0-9@:\%_\+.~#?&//=]*)/gm; // matches website links
                // var rgUl = /([a-zA-Z]+\.\s+)/gm; // matches 'a.', 'I.' etc.
                var rgOl = /([0-9]+\.\s+)/gm; // matches '1.' etc

                if (excerpt) {
                  // get only the characters we can display
                  var mdExcerpt = excerpt.substring(0,220);
                  // apply mini-markdown
                  mdExcerpt = mdExcerpt
                                .replace(rgHeader, '<strong>$&</strong>')
                                .replace(rgStrong, '<strong>$&</strong>')
                                .replace(rgItalic, '<i>$&</i>')
                                .replace(rgOl, '<strong>$&</strong>')
                                .replace(rgLink, '<u>$&</u>');

                  // when the 'compile' expression changes
                  // assign it into the current DOM
                  element.html(mdExcerpt);

                  // compile the new DOM and link it to the current
                  // scope.
                  $compile(element.contents())(scope);
                }
              }
          );
      };
  }
]);
