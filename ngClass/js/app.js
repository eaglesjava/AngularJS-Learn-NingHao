
//创建一个模块：modules
var myApp = angular.module('myApp',[]);

myApp.controller('ShowController',function($scope){
	$scope.shows = [
		{title:'浴血黑帮',subscribe:true},
		{title:'权利的游戏',subscribe:false},
		{title:'冰雪暴',subscribe:true},
		{title:'摩登家庭',subscribe:true},
		{title:'行尸走肉',subscribe:false}
	];
});
