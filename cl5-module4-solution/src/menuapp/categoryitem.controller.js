(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryItemController', CategoryItemController);


CategoryItemController.$inject = ['$stateParams', 'MenuDataService'];
function CategoryItemController($stateParams, MenuDataService) {
	var item = this;
    var promise = MenuDataService.getItemsForCategories($stateParams.categoryShortName);
	promise.then(function (response){
        item.items = response.data.menu_items;
        item.categoryName = response.data.category.name;
    })
    .catch(function (error){
        console.log("Something went terribly wrong.");  
    });
}

})();
