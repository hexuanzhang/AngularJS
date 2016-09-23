var _model = angular.module("ngModel", []);

_model.controller("contenteditable", function() {
    return {
        restrict: "A",
        require: "?ngModel",
        link: function($scope, $element, $attrs, $ngModel) {
            if(!$ngModel) return;

            $ngModel.render = function() {
                $element.html(ngModel.$viewValue || "");
            };

            $element.on("blur keyup change", function() {
               $scope.$apply(read);
            });

            read();

            function read() {
                var _html = $element.html();
                if($attrs.strip && html === "<br>") {
                    _html = "";
                }

                $ngModel.$setViewValue(_html);
            }
        }
    }
})
