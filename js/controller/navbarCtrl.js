var myApp = angular.module('myApp', []);
myApp.controller('navbarCtrl', ['$scope', function($scope) {
  
}]);

myApp.controller('registerUser', ['$scope','$http', function($scope,$http) {
	 
	$scope.save = function(user)
	{
		var data={
			name: $scope.user.name,
			email: $scope.user.email,
			password: $scope.user.password,
			rePassword: $scope.user.rePassword
		}
		console.log(data);
		$http.post("insert.php", data).success(function(data, status, headers, config){
		console.log("inserted Successfully");
		});
	}
	    
}]);