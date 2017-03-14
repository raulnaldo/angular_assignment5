(function () {
"use strict";

angular.module('public')
.controller('SingUpController', SingUpController);

SingUpController.$inject = ['MenuService','$scope'];
function SingUpController(MenuService,$scope) {
  var reg = this;
  reg.invalidMenu=0;

  reg.submit = function () {
    console.log("submit");
    var Response=MenuService.checkFavoriteDish(reg);
    Response.then(function (response) {
      console.log('response from menu:',response)
      reg.invalidMenu=1;
      MenuService.menu=response.data;
      MenuService.reg=reg;
    });
    Response.catch(function (error) {
      console.log('error:',error)
      reg.invalidMenu=2;
    });
  };
  $scope.onBlurFavDish = function($event) {
      console.log($event);
      var Response=MenuService.checkFavoriteDish(reg);
      Response.then(function (response) {
        console.log('response from menu:',response)
        reg.invalidMenu=1;
        MenuService.menu=response.data;
        MenuService.reg=reg;
      });
      Response.catch(function (error) {
        console.log('error:',error)
        reg.invalidMenu=2;
      });      
  };
}

})();
