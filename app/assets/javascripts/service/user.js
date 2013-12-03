(function(angular, app) {
  "use strict";
  app.service("userService",["$window", "$http", function($window, $http) {

    var _url = {
      registrationURL : '/user/register.json',
      loginURL : '/user/login.json'
    };

    var _isUserLoggedIn = $window.gon.userLoggedIn;
    var _userName = $window.gon.username;

    var isUserLoggedIn = function(){
      return _isUserLoggedIn;
    };

    var getUserName = function(){
      return _userName;
    };

    var registerNewUser = function(fullName, email, password, cpassword){
      if(password !== cpassword){
        return;
      }

      return $http.post(_url.registrationURL,{
             name:fullName,
             email:email,
             password:password,
             cpassword:cpassword
          });
    };

    var loginUser = function(email, password){
    };

    return {
      isUserLoggedIn:isUserLoggedIn,
      getUserName:getUserName,
      registerNewUser:registerNewUser,
      loginUser:loginUser
    };
  }]);
})(angular, app);
