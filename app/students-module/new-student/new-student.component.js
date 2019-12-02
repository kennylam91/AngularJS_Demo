angular.
    module('students').
    component('newStudent', {
        templateUrl:'students-module/new-student/new-student.template.html',
        controller: [function NewStudentController(){
            createStudent = function(){
                console.log(this.newStudent);
            }
        }]
    })