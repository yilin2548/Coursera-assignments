(function () {

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'InfoService']
function SignUpController(MenuService, InfoService) {
  var $ctrl = this;
  $ctrl.completed = false;
  $ctrl.submit = function () {
  	$ctrl.completed = true;
	var promise = MenuService.getMenuItemDetail($ctrl.user.menu_item);
	promise.then(function (data){
	    $ctrl.user.fav_item = data;
	    $ctrl.user.verified = true;
	    InfoService.regCompleted = true;
	    InfoService.user = $ctrl.user;
	    $ctrl.message = "Your information has been saved!";
	})
	.catch(function (error){
	 	$ctrl.message = "No such menu number exists!";
	 	$ctrl.user.verified = false;
	});


  };
}

})();
