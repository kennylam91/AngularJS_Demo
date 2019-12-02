//Register `studentList` component, along with its associated controller and template
angular.
	module('students').
	component('studentList', {
		templateUrl: 'students-module/student-list/student-list.template.html',
		controller: ['$http',
			function StudentListController($http) {
				let self = this;
				this.myOrderBy = 'age';
				this.orderByMe = function (x) {
					this.myOrderBy = x;
				}
				$http.get('students-module/students/students.json').then(function (response) {
					self.students = response.data;
				})
			}

		]
	});
