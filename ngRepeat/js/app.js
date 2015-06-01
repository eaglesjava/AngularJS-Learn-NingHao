
//创建一个模块：modules
var myApp = angular.module('myApp',[]);

myApp.controller('ShowController',function($scope){
	$scope.shows = [
		{title:'浴血黑帮'},
		{title:'权利的游戏'},
		{title:'冰雪暴'},
		{title:'摩登家庭'},
		{title:'行尸走肉'}
	];
});
