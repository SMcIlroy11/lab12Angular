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


$scope.removeGName = function (name) {
var index = $scope.gNames.indexOf(name);
$scope.gNames.splice(index, 1);

}

$scope.removeBName = function (name) {
var index = $scope.bNames.indexOf(name);
$scope.bNames.splice(index, 1);

}


});
