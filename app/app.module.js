//Define the `studentApp` module
angular.module('studentApp', [
	//which depends on the `studentList` module
	'ngRoute',
	'studentDetail',
	'studentList', 
	'newStudent'
]);