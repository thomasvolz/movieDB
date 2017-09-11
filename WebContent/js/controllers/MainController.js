var api_key='bfabcf706e4bf2736881f5765f61c5dd';
var movie='Deadpool';

app.controller('MainController', ['$scope', function($scope, $http) { 
	$http.get('https://api.themoviedb.org/3/search/movie?api_key='+api_key+'&language=en-US&query='+movie+'&page=1&include_adult=false'.then(function(response){
	$scope.movieList = response.data;	
	}));
	
}]);
