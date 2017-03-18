(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
	$scope.items = "";
	$scope.returnMessage = "";

	$scope.sayMessage = function() {
		var arrayOfItems = $scope.items.split(',');
		if ($scope.items) {
			if (arrayOfItems.length > 3) {
				$scope.returnMessage = "Too much!";
			}
			else {
				$scope.returnMessage = "Enjoy!";
			}
		}
		else {
			$scope.returnMessage = "Please enter data first!"
		}
	}
}

})();
