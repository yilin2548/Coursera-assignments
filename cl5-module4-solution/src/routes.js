(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Menu categories
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'MenuCategoryController as menu',
    resolve: {
      categoriesList: ['MenuDataService', function (MenuDataService) {
        var promise = MenuDataService.getAllCategories();
        return promise.then(function (response){
          return response.data;
        })
        .catch(function (error) {
            console.log("Something went terribly wrong.");  
        });
      }]
    }
  })

  // Items
  .state('items', {
    url: '/{categoryShortName}/items',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'CategoryItemController as item'
  });
}

})();
