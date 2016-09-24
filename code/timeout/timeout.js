var app = angular.module("timeout", []);

app.controller("timeout", function($scope, $timeout) {
   $scope.cutDown = 3;

    var _timer = $timeout(function() {
        console.log("timeout is exctued.");
        $scope.cutDown--;
    }, 1000);

    $scope.$on("$destory", function(event){
        console.log("timeout is canceled.");
        $timeout.cancel(_timer);
    });
});
