(function (){
    'use strict';
    
    angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
    
    
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController ($scope)
    {
        $scope.name = "";
        $scope.ans = null;
        $scope.action = function () {
            
            alert($scope.ans);
            if($scope.name == null) {
               $scope.str.length = 0; 
            }
            $scope.str = $scope.name.trim().split(",");
            console.log($scope.str.length);  
            
            if ($scope.str.length == 0) {
                $scope.ans = "Please enter data first";
            } else if($scope.str.length <= 3) {
               $scope.ans = "Enjoy!"; 
            } else if ($scope.str.length > 3) {
               $scope.ans = "Too Much!"; 
            } 
        };
    }
})();