angular.module('students')
    .service('StudentService', ['$http', function ($http) {
        let self = this;
        this.students = [{
            code: "A01",
            firstName: "Pham",
            lastName: "Lam",
            age: 20,
            dob: "1991-05-04"
        }, {
            code: "A02",
            firstName: "Nguyen",
            lastName: "Thang",
            age: 22,
            dob: "1992-05-04"
        }, {
            code: "A03",
            firstName: "Tran",
            lastName: "Dung",
            age: 25,
            dob: "1991-05-04"
        }];
        this.getStudents = function () {
            // return $http.get('students-module/students/students.json');
            return this.students;
        };
        this.getStudentByCode = function (studentCode) {
            // return $http.get('students-module/students/' + studentCode + '.json');
            for (let student of this.students) {
                if(student.code == studentCode){
                    return student;
                }
            }
        };
        
    }
])