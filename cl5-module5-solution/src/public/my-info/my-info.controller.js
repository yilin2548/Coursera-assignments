(function () {

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['InfoService', 'ApiPath']
function MyInfoController(InfoService, ApiPath) {
  var $ctrl = this;
  $ctrl.verified = InfoService.regCompleted;
  $ctrl.user = InfoService.user;
  $ctrl.basePath = ApiPath;
}

})();