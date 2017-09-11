var api_key='bfabcf706e4bf2736881f5765f61c5dd';
var movie='Deadpool';

app.controller('MainController', ['$scope', function($scope, $http) { 
	$scope.movies = $http.get('https://api.themoviedb.org/3/search/movie?api_key='+api_key+'&language=en-US&query='+movie+'&page=1&include_adult=false');
}]);



//Old example code stuff
//$scope.title = 'This Month\'s Bestsellers'; 
//$scope.promo = 'The most popular books this month.';
//$scope.products = [
//	  	{ 
//	    	name: 'The Book of Trees', 
//	    	price: 19, 
//	    	pubdate: new Date('2014', '03', '08'), 
//	    	cover: 'img/the-book-of-trees.jpg' 
//	  	}, 
//	  	{ 
//	    	name: 'Program or be Programmed', 
//	    	price: 8, 
//	    	pubdate: new Date('2013', '08', '01'), 
//	    	cover: 'img/program-or-be-programmed.jpg' 
//	  	}
//	  ];
//$scope.plusOne = function(index) { 
//	  	$scope.products[index].likes += 1; 
//		};
//		$scope.minusOne = function(index) { 
//	  	$scope.products[index].dislikes += 1; 
//		};