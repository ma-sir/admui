angular.module('abMaterial').controller('TableCtrl', function ($scope, $mdToast, $mdDialog, RestService, $ocLazyLoad, $timeout, $q, $log) {


    var tableDataService = new RestService('app/data/tabledata.json');
    $scope.appCfg.loading = true;

    $scope.tableData = [];
    $scope.maxSize = 5;
    $scope.totalItems = 0;
    $scope.currentPage = 1;

    $timeout(function () {
        tableDataService.get({}, function (result) {
            $scope.tableData = result.list;
            $scope.appCfg.loading = false;
            $scope.totalItems = $scope.tableData.length * 10 / 5;
        });
    }, 3000);


    $scope.pageChanged = function () {
        $scope.itemsSwitch = false;
        angular.forEach($scope.tableData, function (item) {
            item.selected = $scope.itemsSwitch;
        });
    };


    $scope.onChange = function () {
        for (var i = ($scope.currentPage - 1) * 5; i < $scope.currentPage * 5; i++) {
            if ($scope.tableData[i]) {
                $scope.tableData[i].selected = $scope.itemsSwitch;
            }
        }
    };

});
