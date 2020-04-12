(function () {
'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope) {
    $scope.LunchCheckController="";
    $scope.lunchMenuMessage="";

    $scope.LunchCheck=function(){
      var lunchCount = countNumberOfLunches($scope.lunchMenuItems);
      $scope.lunchMenuMessage = displayLunchMessage(lunchCount);
    };

    function displayLunchMessage(count) {
      var lunchMessage = "";
      if (count===0) {
        lunchMessage ='Please entre data first';
        }

        else if (count<4) {
          lunchMessage ='Enjoy';

        }

        else if (count>3) {
          lunchMessage = 'Too much!';

        }
        return lunchMessage;
    };

function countNumberOfLunches(string){
  var numberOfLunches = 0;
  if (string.length) {
    numberOfLunches = string.split(',').length;
  }
  return numberOfLunches;
 };

}

})();
