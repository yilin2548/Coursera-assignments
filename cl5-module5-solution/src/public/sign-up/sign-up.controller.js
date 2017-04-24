(function () {

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService']
function SignUpController(MenuService) {
  var $ctrl = this;

  $ctrl.submit = function () {
    $ctrl.completed = true;

	var promise = MenuService.getMenuItemDetail($ctrl.user.menu_item);
	promise.then(function (data){
	    $ctrl.fav_item = data.name;
	    $ctrl.exist = true;
	})
	.catch(function (error){
	 	$ctrl.exist = false;
	 	$ctrl.completed = false;
	 	$ctrl.fav_item = 'No such menu number exists '
	    console.log("Something went terribly wrong.");  
	});


  };
}

})();
