(function () {
"use strict";

angular.module('public')
.controller('SingUpController', SingUpController);

SingUpController.$inject = ['MenuService','$scope'];
function SingUpController(MenuService,$scope) {
  var reg = this;
  reg.invalidMenu=0;
  reg.MenuName="";

  reg.submit = function () {
    console.log('reg;',reg);
    var Response=MenuService.checkFavoriteDish(reg.user.favdish.toUpperCase());
    Response.then(function (response) {
      reg.invalidMenu=1;
      MenuService.menu=response.data;
      MenuService.reg=reg;
    });
    Response.catch(function (error) {
      reg.invalidMenu=2;
    });
  };

  $scope.onBlurFavDish = function($event) {
    if ($event){
      if ($event.length > 1){
        reg.MenuName="";
        var Response=MenuService.checkFavoriteDish($event.toUpperCase());
        Response.then(function (response) {
          reg.invalidMenu=3;
          MenuService.menu=response.data;
          MenuService.reg=reg;
          reg.MenuName=response.data.name;
        });
        Response.catch(function (error) {
          reg.invalidMenu=2;
        });
      }
    }
  };
}

})();
