angular.module('ngWatchColloection', [])
    .controller('watchCollection', ['$scope', function($scope) {
        $scope.names = ['igor', 'matias', 'misko', 'james'];
        $scope.dataCount = 4;

        $scope.$watchCollection('names', function(newNames, oldNames) {
            console.info("$watchCollection is called.", newNames.length);
            $scope.dataCount = newNames.length;
        });


        $scope.names.pop();
    }]);