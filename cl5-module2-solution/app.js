(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList= this;

  toBuyList.items = ShoppingListCheckOffService.getItems(1);

  toBuyList.checkItem = function (itemIndex) {
    ShoppingListCheckOffService.checkItem(itemIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtList = this;

  alreadyBoughtList.items = ShoppingListCheckOffService.getItems(2);

  alreadyBoughtList.addItem = function () {
  ShoppingListCheckOffService.addItem(alreadyBoughtList.itemName, alreadyBoughtList.itemQuantity);

  };
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Chicken Legs",
      quantity: "100"
    }
  ];

  var boughtItems = [];

  service.checkItem = function (itemIndex){
    var item = {
      name: toBuyItems[itemIndex].name,
      quantity: toBuyItems[itemIndex].quantity
    };
    boughtItems.push(item);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getItems = function (caseNum) {
    switch(caseNum){
      case 1: 
          return toBuyItems;
      case 2:
          return boughtItems;
    }
  };
}

})();
