(function(angular, app) {
  "use strict";
  app.service("userService",["$window", function($window) {

    var _isUserLoggedIn = $window.gon.userLoggedIn;
    var _userName = $window.gon.username;

    var isUserLoggedIn = function(){
      return _isUserLoggedIn;
    };

    var getUserName = function(){
      return _userName;
    };

    return {
      isUserLoggedIn:isUserLoggedIn,
      getUserName:getUserName
    };
  }]);
})(angular, app);
