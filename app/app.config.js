angular.
    module('studentApp').
    config(['$routeProvider', 
        function config($routeProvider){
            $routeProvider.
                when('/students', {
                    template: '<student-list></student-list>'
                }).
                when('/students/create', {
                    template: '<new-student></new-student>'
                }).
                when('/students/:studentCode',{
                    template:'<student-detail></student-detail>'
                }).
                otherwise('/students');
        }
]);