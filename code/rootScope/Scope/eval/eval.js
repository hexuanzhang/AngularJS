angular.module("ngEval", [])
    .controller("eval", evalController);

evalController.$inject = ["$log", "$scope"];

function evalController($log, $scope) {
    var e = this;

    $scope.a = 1;
    $scope.b = 2;

    console.log("eval", new Date().toLocaleString(), $scope.$eval('a+b'));  // 3
    console.log("eval", new Date().toLocaleString(), $scope.$eval(function(scope){ return scope.a + scope.b; })); // 3

    e.name = "evalAsync demo";

    document.getElementById("async_btn").onclick = function() {
        $scope.$evalAsync(function(scope) {
            $log.info(scope === $scope);
            e.name = "evalAsync test";
        })
    };
}