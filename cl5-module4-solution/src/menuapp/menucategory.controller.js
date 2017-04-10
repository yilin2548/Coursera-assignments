(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoryController', MenuCategoryController);


MenuCategoryController.$inject = ['MenuDataService', 'categoriesList'];
function MenuCategoryController(MenuDataService, categoriesList) {
  var menu = this;
  menu.categories = categoriesList;
}

})();
