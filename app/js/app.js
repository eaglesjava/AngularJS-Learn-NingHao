
//创建一个模块：modules
var myApp = angular.module('myApp',[]);

//使用控制器
myApp.controller('UserController',function($scope){
	//console.log('Hello');
	//从控制器里提供视图显示的数据：$scope
	$scope.user = {};
	$scope.user.name = 'scott';
	$scope.user.email = 'scott@qq.com';
	
	//在控制器上定义方法
	$scope.user.subscribe = function(){
		console.log($scope.user.name + ',您订阅的新闻将发送到：' + $scope.user.email);
	};
});


myApp.controller('ShowController',function($scope){
	$scope.shows = [
		{title,'浴血黑帮'},
		{title,'权利的游戏'},
		{title,'冰雪暴'},
		{title,'摩登家庭'},
		{title,'行尸走肉'}
	];
});
