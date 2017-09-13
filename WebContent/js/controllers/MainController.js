var api_key='bfabcf706e4bf2736881f5765f61c5dd';
var movie='Deadpool';
var trumovie='Titanic';
var resultCount;
app.controller('MainController', ['$scope', '$http', function($scope, $http) { 

	$scope.submitFunction = function(){
	    $http.get('https://api.themoviedb.org/3/search/movie?api_key='+api_key+'&language=en-US&query='+$scope.movieTitle+'&page=1&include_adult=false')
	        .then(successCallback, errorCallback);
	}
	function successCallback(response){

		$scope.results = response.data.total_results
		$scope.movieList = response.data.results

	    $scope.$watch('results', function () {
	        if ($scope.results < 1) {
	            $scope.output = "No results found!";
	            $scope.results = '';
	        } else {
	            $scope.output = "results found; Here are the top results!";
	        }
	    });
	}

	function errorCallback(error){
	}

}]);

