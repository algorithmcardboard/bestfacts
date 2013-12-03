(function(angular, app) {
  "use strict";

  app.controller("NavbarController",["$scope", "$http", "$window", "userService", function($scope, $http, $window, userService) {

    $scope.hideForm = true;
    $scope.isUserLoggedIn = userService.isUserLoggedIn();
    $scope.username = userService.getUserName();

    $scope.loginClicked = function(){
      $scope.hideForm = !$scope.hideForm;
    };

    $scope.authenticateUser = function(){
      $http.post('/user/login.json', {email:$scope.email, password:$scope.password}).
        then(function(response){
          $window.location.reload();
        }, function(response){
          alert('unable to authenticate with give email/password combo');
        });
    };
  }]);
})(angular, app);
