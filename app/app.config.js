angular.
    module('studentApp').
    config(['$routeProvider', 
        function config($routeProvider){
            $routeProvider.
                when('/students', {
                    template: '<student-list></student-list>'
                }).
                otherwise('/students')
        }
])