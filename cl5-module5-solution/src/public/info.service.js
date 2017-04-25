(function () {
"use strict";

angular.module('public')
.service('InfoService', InfoService);


function InfoService() {
  var service = this;

  service.regCompleted = false;

}



})();
