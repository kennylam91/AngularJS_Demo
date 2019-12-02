angular.
    module('students').
    component('newStudent', {
        templateUrl:'students-module/new-student/new-student.template.html',
        controller: function NewStudentController(){
            this.create = function(){
                console.log(this.newStudent);
            };
            this.reset = function(){
                this.newStudent = {};
            }
        }
    });