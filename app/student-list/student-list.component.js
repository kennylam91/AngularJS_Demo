//Register `studentList` component, along with its associated controller and template
angular.
	module('studentList').
	component('studentList', {
		templateUrl: 'student-list/student-list.template.html',
		controller: function StudentListController($http){
			let self = this;
			this.myOrderBy = 'age';
			this.orderByMe = function(x){
			    this.myOrderBy = x;
			}
			$http.get('students/students.json').then(function(response){
				self.students = response.data;
			})
		}
	});
