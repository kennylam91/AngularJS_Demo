//Register `studentList` component, along with its associated controller and template
angular.
	module('students').
	component('studentList', {
		templateUrl: 'students-module/student-list/student-list.template.html',
		controller: ['StudentService',
			function StudentListController(StudentService) {
				let self = this;
				this.myOrderBy = 'age';
				this.orderByMe = function (x) {
					this.myOrderBy = x;
				}
				this.students = StudentService.getStudents();
			}

		]
	});
