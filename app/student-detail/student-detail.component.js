angular.
    module('studentDetail').
    component('studentDetail', {
        templateUrl: 'student-detail/student-detail.template.html',
        controller: ['$routeParams', '$http',
            function StudentDetailController($routeParams, $http) {
                let self = this;
                console.log($routeParams.studentCode);
                $http.get('students/' + $routeParams.studentCode + '.json')
                    .then(function (response) {
                        self.student = response.data;
                    })
            }]
    });