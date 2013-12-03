(function(angular, app) {
  "use strict";

  app.controller("FactController",["$scope", "userService", function($scope, userService) {

    $scope.isUserLoggedIn = userService.isUserLoggedIn();

    $scope.loginClicked = function(){
      $scope.hideForm = !$scope.hideForm;
    };
  }]);
})(angular, app);
