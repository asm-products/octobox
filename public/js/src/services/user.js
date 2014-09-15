'use strict';

//User service for editing user account details
angular.module('octobox.user').factory('User', ['$resource', function($resource) {
    return $resource('api/users/:userId/:postfix', {
        userId: '@_id'
    }, {
        update: {
            method: 'PUT'
        },
        updateBetaStatus: {
            method: 'PUT',
            params: {
              postfix: 'betastatus'
            }
        },
        reset: {
          method: 'POST',
          url: 'forgot'
        },
        remove: {
          method: 'DELETE'
        }
    });
}]);
