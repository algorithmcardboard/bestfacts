(function(angular, app) {
  "use strict";

  app.controller("FactController",["$scope", "factService", "userService", function($scope, factService, userService) {

    $scope.isUserLoggedIn = userService.isUserLoggedIn();
    $scope.loggedinUsername = userService.getUserName();
    $scope.current_user_id = userService.getUserId();

    $scope.editing = false;

    $scope.initilaize = function(){
      factService.getAllFacts()
        .then(function(response){
          $scope.facts = response.data;
        },function(response){
        });
    };

    $scope.loginClicked = function(){
      $scope.hideForm = !$scope.hideForm;
    };

    $scope.createFact = function(){
      factService.createFact($scope.newTitle, $scope.newContent);
    };

    $scope.initilaize();
  }]);
})(angular, app);
