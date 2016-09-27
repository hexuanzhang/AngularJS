var _observe = angular.module("ngObserve", [], angular.noop);

_observe.controller("observe", function($scope) {
    $scope.a = "test $observe.";

    $scope.update =  function() {
        $scope.a = "updated a";
    }
});

_observe.directive("observedir", function() {
    return {
        restrict: "A",
        compile: function($element, $attrs) {
            console.dir($attrs);

            $attrs.$observe("a", function(newValue) {
                console.info("attributes has been updated");
                console.dir(arguments);
            });
        }
    }
});