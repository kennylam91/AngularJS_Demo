angular.module('students')
    .service('StudentService', ['$http', function ($http) {
        this.getStudents = function () {
            return $http.get('students-module/students/students.json');
        }
        this.getStudentByCode = function (studentCode) {
            return $http.get('students-module/students/' + studentCode + '.json');
        }
    }])