(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoryController', MenuCategoryController);


MenuCategoryController.$inject = ['MenuDataService', 'categories'];
function MenuCategoryController(MenuDataService, categories) {
  var categories = this;
  categories.categories = categories;
}

})();
