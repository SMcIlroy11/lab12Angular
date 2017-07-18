var app= angular.module('lab12', []);

app.controller('lab12Ctrl', function($scope) {



 $scope.gNames = ['Sophia', 'Emma', 'Olivia', 'Ava', 'Mia', 'Isabella', 'Riley', 'Aria', 'Zoe', 'Charlotte'];

 $scope.addGName =function(name) {

$scope.gNames.push(name);


};

$scope.bNames = ['Jackson', 'Aiden', 'Lucas', 'Liam', 'Noah', 'Ethan','Mason', 'Caden', 'Oliver', 'Elijah'];

$scope.addBName =function(name) {

$scope.bNames.push(name);

};

});


// $scope.names = [];
// $scope.addName= function(usersName){
//
//
//   $scope.names.push(usersName);
