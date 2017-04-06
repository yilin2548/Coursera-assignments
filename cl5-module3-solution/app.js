(function (){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
	var ddo = {
		templateUrl: 'menuItem.html',
		scope: {
			items: '<',
			onRemove: '&'
		}
	};
	return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	var list = this;
	list.searchTerm ='';
	
	list.search = function () {
		if (list.searchTerm == ''){
			list.found = [];
		}
		else{
			var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);

			promise.then(function (response){
				list.found = response;
			})
			.catch(function(error){
				console.log("Something wrong.");
			});	
		}

	};

	list.remove = function (index) {
		list.found.splice(index, 1);
	};
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
	var service = this;

 	service.getMatchedMenuItems = function (searchTerm) {
	    var response = $http({
	      method: "GET",
	      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
		});


	    return response.then(function (response){
	    	// process result and only keep item
	        var foundItems = [];

	    	var result = response.data.menu_items;
	    	for (var i = 0; i < response.data.menu_items.length; i++) {
		    	if (result[i].description.indexOf(searchTerm.toLowerCase()) !== -1){
		    		foundItems.push(result[i])
		    	}
		    }
	    	return foundItems;
	    });

	};
}


})();