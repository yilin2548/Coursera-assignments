(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemController', ItemController);


ItemController.$inject = ['MenuDataService', 'items'];
function MenuCategoryController(MenuDataService, items) {
  var items = this;
  items.items = items;
}

})();
