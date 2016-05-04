// var app = angular.module("myModule", []);


$(function() {
	var quote = '';
  $.get('/api').success(function(data){
    quote = data;
    $("<p>" + quote + "</p>").appendTo('header');
    console.log(quote);
  });
});

// app.controller("mainController", function($scope){
// 	$scope.quote = quote;
// 	console.log(quote);
// });

// // app.config(function($routeProvider){
// // 	$routeProvider
// // 	.when("./",
// // 	{
// // 		controller: "mainController",
// // 		templateUrl: "/partials/quote.html"
// // 	})
// // });

// app.directive("quote", function(){
// 	return {
// 		restrict: "AE",
// 		template: "<h2>{{quote}}</h2>",
// 		replace: false
// 	}
// });