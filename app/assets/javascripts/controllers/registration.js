(function(angular, app) {
  "use strict";

  app.controller("RegistrationController",["$scope", "$window", "userService", function($scope, $window, userService) {

    $scope.registerUser = function(){
      userService.registerNewUser($scope.fullName, $scope.email, $scope.passwd, $scope.cpasswd)
        .then(function(response){
          $window.location.reload();
        },function(response){
          console.log(response);
        });
    };
  }]);
})(angular, app);

