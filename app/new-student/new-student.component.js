angular.
    module('newStudent').
    component('newStudent', {
        templateUrl:'new-student/new-student.template.html',
        controller: [function NewStudentController(){
            createStudent = function(){
                console.log(this.newStudent);
            }
        }]
    })