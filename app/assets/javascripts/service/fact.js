(function(angular, app) {
  "use strict";
  app.service("factService",["$window", "$http", function($window, $http) {

    var _url = {
      allFactsUrl : '/facts.json'
    };

    var getAllFacts = function(sortBy){
      return $http.get(_url.allFactsUrl,{sort:'Title'});
    };

    var createFact = function(title,content){
    };

    return {
      getAllFacts: getAllFacts,
      createFact:createFact
    };
  }]);
})(angular, app);

