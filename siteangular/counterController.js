var app = angular.module('app', []);

app.controller('counterController', function($scope) {
  $scope.counter = 0;
	
  $scope.addOne = function() {
    $scope.counter++;
  }
});