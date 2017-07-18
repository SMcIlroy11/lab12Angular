var app= angular.module('lab12', []);

app.controller('lab12Ctrl', function($scope) {


 // $scope.names = ['Katie', 'Stephanie', 'Susan', 'Sydney'];

 $scope.names = ['Katherine', 'Stephanie', 'Sydney'];

 $scope.addName =function(name) {

$scope.names.push(name);


};

});


// $scope.names = [];
// $scope.addName= function(usersName){
//
//
//   $scope.names.push(usersName);
