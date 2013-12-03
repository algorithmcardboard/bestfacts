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

    $scope.removeFact = function(fact){
      if(!fact){
        return;
      }

      factService.deleteFact(fact.id).
        then(function(response){
          var index = $scope.facts.indexOf(fact);
          $scope.facts.splice(index,1);
        },function(response){
        });
    };

    $scope.updateFact = function(fact){
      if(!fact){
        return;
      }
      factService.updateFact(fact.id, fact.newTitle, fact.newContent).
        then(function(response){
          fact.editing = false;
          fact.title = fact.newTitle;
          fact.content = fact.newContent;
        },function(response){
        });
    };

    $scope.createFact = function(){
      if(!$scope.newTitle || !$scope.newContent){
        return;
      }
      factService.createFact($scope.newTitle, $scope.newContent)
        .then(function(response){
          $scope.facts.push(response.data);
          $scope.newTitle = $scope.newContent = "";
          $scope.addFact = false;
        },function(response){
        });
    };

    $scope.initilaize();
  }]);
})(angular, app);
