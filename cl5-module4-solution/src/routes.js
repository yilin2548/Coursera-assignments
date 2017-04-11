(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
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
  .state('categories.items', {
    url: '/{categoryIndex}/items',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'CategoryItemController as item'
  });
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}

})();
