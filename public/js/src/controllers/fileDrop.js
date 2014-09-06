'use strict';

angular.module('octobox.filedrop').controller('FileDropController', [ '_', '$scope', '$rootScope', '$http', '$timeout', '$upload', 'Global', 'File', 'Modal', function(_, $scope, $rootScope, $http, $timeout, $upload, Global, File, Modal) {

	$scope.activeView = Global.activeView;
  $scope.user = Global.user;
  $scope.modal = Modal;

  $scope.fileReaderSupported = window.FileReader !== null;

	$scope.hasUploader = function(index) {
		return $scope.upload[index] !== null;
	};
	$scope.abort = function(index, progress) {
		if (progress === 100)
			return;

		$scope.upload[index].abort();
		$scope.upload[index] = null;
	};
	$scope.onFileSelect = function($files) {
		$scope.selectedFiles = [];
		$scope.progress = [];
		$scope.finished = [];
		if ($scope.upload && $scope.upload.length > 0) {
			for (var i = 0; i < $scope.upload.length; i++) {
				if ($scope.upload[i] !== null) {
					$scope.upload[i].abort();
				}
			}
		}
		$scope.upload = [];
		$scope.uploadResult = [];
		$scope.selectedFiles = $files;
		$scope.dataUrls = [];

		for ( var j = 0; j < $files.length; j++) {
			var $file = $files[j];
			$scope.finished.push(false);
			if (window.FileReader && $file.type.indexOf('image') > -1) {
				var fileReader = new FileReader();
				fileReader.readAsDataURL($files[j]);
				var loadFile = (function(fileReader, index) { // jshint ignore:line
					fileReader.onload = function(e) {
						$timeout(function() {
							$scope.dataUrls[index] = e.target.result;
						});
					};
				})(fileReader, j); // jshint ignore:line
			}
			$scope.progress[j] = -1;
      var finishedCount = 0;
      // start upload immediately
      $scope.start(j, function (index) {
				// set finished for finished file to true
				$scope.finished[index] = true;

				// count how many files finished, then refresh view and
				// close modal once all files are uploaded
        if (finishedCount === $files.length - 1) {
          $scope.modal.close();
        }
        finishedCount++;
      }); // jshint ignore:line
		}
	};

	$scope.start = function(index, callback) {
		$scope.progress[index] = 0;
		$scope.errorMsg = null;
    var uploadPath = $scope.activeView.path + '/';
    if ($scope.activeView.path === '/')
      uploadPath = $scope.activeView.path;

		var fileReader = new FileReader();
    fileReader.onload = function(e) {
		  $scope.upload[index] = $upload.http({
		    url: 'https://api-content.dropbox.com/1/files_put/sandbox' + uploadPath + $scope.selectedFiles[index].name + '?overwrite=false',
				method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + $scope.user.dropbox.token,
          'Content-Type': $scope.selectedFiles[index].type,
          // 'Content-Length': $scope.selectedFiles[index].size
          },
				data: e.target.result
      }).progress(function(evt) {
          // Math.min is to fix IE which reports 200% sometimes
          $scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      }).success(function(response) {
          // on success, add file to octobox
          var filePath,
              collectionPath,
              stackPath,
              lowercasePath = response.path.toLowerCase(),
              parsedPath = lowercasePath.match(/^\/(.+)/),
              pathElts = parsedPath[1].split('\/');
          // if inbox
          if (pathElts.length === 1){
            filePath = pathElts[0];
            collectionPath = undefined;
            stackPath = undefined;
          }
          // if collection
          if (pathElts.length === 2){
            filePath = pathElts[1];
            collectionPath = pathElts[0];
            stackPath = undefined;
          }
          // if stack
          if (pathElts.length === 3){
            filePath = pathElts[2];
            stackPath = pathElts[1];
            collectionPath = pathElts[0];
          }
          var file = new File({
            name: filePath,
            path: lowercasePath,
            size: response.size,
            mimeType: response.mime_type,
            modified: response.modified,
            user: $scope.user._id
          });
          file.$create({
            filename: filePath,
            collection: collectionPath,
            stack: stackPath
          }, function () {
            callback(index);
          });
      }).error(function(response) {
          if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
      });
    };
	  fileReader.readAsArrayBuffer($scope.selectedFiles[index]);
	};
	$scope.$on('$destroy', function () {
		$rootScope.$emit('refreshView');
	});
}]);
