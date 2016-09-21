var app = angular.module('ngCtrl', []);

app.controller("ctrl", function($scope) {
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.fullName = function() {
        return $scope.firstName + $scope.lastName;
    };
})

app.controller("eventCtrl", function($scope){
    $scope.count = 0;
    $scope.$on("event", function(){
        $scope.count++;
    });
})