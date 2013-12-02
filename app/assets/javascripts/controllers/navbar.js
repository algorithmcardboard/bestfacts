(function(angular, app) {
  "use strict";

  app.controller("NavbarController",["$scope", function($scope) {
    $scope.hideForm = true;

    $scope.loginClicked = function(){
      $scope.hideForm = !$scope.hideForm;
    };
  }]);
})(angular, app);
