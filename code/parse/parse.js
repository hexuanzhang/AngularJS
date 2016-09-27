var parse = angular.module("ngParse", []);

parse.controller("parse", function($scope, $parse) {
    var _getter = $parse("user.name"),
        _setter = _getter.assign;

    var context = { "user": {
            "name": "angular"
        }},
        local = { "user": {
            "name": "local"
        }};

    console.log("getter:", _getter(context));
    _setter(context, "newValue");
    console.log("setter:", context.user.name);
    console.log("getter with local:", _getter(context, local));
});