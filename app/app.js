'use strict';

// Define the `phonecatApp` module
/*var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});*/

var phonecatApp=angular.module('phonecatApp',[]);//定义数据模型
/*在PhoneListCtrl控制器里面初始化了数据模型（这里只是一个包含了数组的
函数，数组中存储的对象是手机数据列表）。*/
phonecatApp.controller('PhoneListController',function PhoneListController($scope){
  $scope.phones=[
    {
      name:'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    },{
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    },{
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});

