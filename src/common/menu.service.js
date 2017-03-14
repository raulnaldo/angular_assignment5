(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  //Variable para introducir los datos de preferencia del usuario
  service.menu={};
  service.reg={};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };


  service.checkFavoriteDish = function (reg) {
    var config = {};
    console.log(reg.user.favdish);
    return $http.get(ApiPath + '/menu_items/'+reg.user.favdish+'.json')
  };



}



})();
