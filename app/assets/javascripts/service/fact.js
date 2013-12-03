(function(angular, app) {
  "use strict";
  app.service("factService",["$window", "$http", function($window, $http) {

    var _url = {
      allFactsUrl : '/facts.json',
      factCreateUrl : '/facts.json',
      deleteFactUrl : function(fact_id){
        return  '/facts/'+fact_id+'.json';
      },
      updateFactUrl: function(fact_id){
        return  '/facts/'+fact_id+'.json';
      }
    };

    var getAllFacts = function(sortBy){
      return $http.get(_url.allFactsUrl,{params:{sort:sortBy}});
    };

    var createFact = function(title,content){
      return $http.post(_url.factCreateUrl, {title:title, content:content});
    };

    var deleteFact = function(fact_id){
      return $http['delete'](_url.deleteFactUrl(fact_id));
    };

    var updateFact = function(fact_id, title, content){
      return $http.put(_url.updateFactUrl(fact_id), {title:title, content:content});
    };

    return {
      getAllFacts: getAllFacts,
      createFact:createFact,
      deleteFact:deleteFact,
      updateFact:updateFact
    };
  }]);
})(angular, app);

