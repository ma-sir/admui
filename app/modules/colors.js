angular.module('abMaterial').controller('ColorsCtrl', function ($scope, $mdToast, $mdDialog) {

  $scope.colorCode = function(ev){
    var e = $(ev.target);
    var hex = e.data('hashhex');
    var rgb = e.data('rgb');
    var rgba = e.data('rgba');


    $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .textContent("HEX:" + hex + ",  RGB:" + rgb +",  RGBA:" +rgba)
            .ok('Got it!')
            .targetEvent(ev)
      );


  }


});
