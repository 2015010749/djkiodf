(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'林冠旭',
        ab:'',
        name1:'林冠旭',
        phone:'13115906336',
        phone1:'13115906336',
        createTime:'2017-9-28 15:30:00',
        email:'2195937411@qq.com',
        hylx:'111'
      });
    });
  }])
})();
