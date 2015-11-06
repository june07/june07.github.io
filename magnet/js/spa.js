angular.module('magRed', ['ui.bootstrap']).controller('MagRedController', function ($scope, $http) {
  $scope.alerts = [
  ];
  $scope.urls = [
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({ type: 'success', msg: 'Well done! Here is your forum safe http magnet link:.'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
  $scope.getHttpUrl = function() {
  // insert some url checking here
    $http.get('http://june07.com/magnet/spa.php?http://june07.com/magnet/m?'+$scope.magnetUrl).
    success(function(data, status, headers, config) {
        $scope.urls.push({ value: 'http://june07.com/magnet/m?'+$scope.magnetUrl, short: data, bbc: '[URL="'+data+'"]'+data+'[/URL]' });
    }).
    error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    });;
  }
});
