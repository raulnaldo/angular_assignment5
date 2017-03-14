(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService','ApiPath'];
function MyInfoController(MenuService,ApiPath) {
  var userInfo= this;
  userInfo.reg=MenuService.reg;
  userInfo.menu=MenuService.menu;
  userInfo.basePath=ApiPath;
  console.log('MyInfoController:',userInfo);


}

})();
