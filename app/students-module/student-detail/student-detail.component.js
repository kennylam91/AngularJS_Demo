angular.
    module('students').
    component('studentDetail', {
        templateUrl: 'students-module/student-detail/student-detail.template.html',
        controller: ['$routeParams', 'StudentService',
            function StudentDetailController($routeParams, StudentService) {
                let self = this;
                StudentService.getStudentByCode($routeParams.studentCode).then(function(response){
                    self.student = response.data;
                })
            
            }]
    });