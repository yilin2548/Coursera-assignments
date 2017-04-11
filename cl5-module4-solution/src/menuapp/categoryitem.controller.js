(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryItemController', CategoryItemController);


CategoryItemController.$inject = ['$stateParams', 'MenuDataService', 'categoriesList'];
function CategoryItemController($stateParams, MenuDataService, categoriesList) {
	var item = this;
	var categoryShortName = categoriesList[$stateParams.categoryIndex].short_name;
    var promise = MenuDataService.getItemsForCategories(categoryShortName);
	promise.then(function (response){
        item.items = response.data.menu_items;
        item.categoryName = response.data.category.name;
    })
    .catch(function (error){
        console.log("Something went terribly wrong.");  
    });
}

})();
