
'use strict';

PatientListController.$inject = ['$state','$scope','$http', 'uiGridConstants'];

function PatientListController($state,$scope,$http, uiGridConstants) {
    var vm=this;

    var paginationOptions = {
        pageNumber: 1,
        pageSize: 25,
        sort: null
    };

    $scope.gridOptions = {
        paginationPageSizes: [25, 50, 75],
        paginationPageSize: 25,
        useExternalPagination: true,
        useExternalSorting: true,
        enableFullRowSelection : true,
        enableRowSelection: true,
        columnDefs: [
            { name: 'First Name' },
            { name: 'Last Name', enableSorting: false },
            { name: 'Last Visit', enableSorting: false },
            { name: 'Follow Up', enableSorting: false },
            { name: 'Status', enableSorting: false }
        ],
       multiSelect :false,

        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;

            $scope.gridApi.core.on.sortChanged($scope, function(grid, sortColumns) {
                if (sortColumns.length == 0) {
                    paginationOptions.sort = null;
                } else {
                    paginationOptions.sort = sortColumns[0].sort.direction;
                }
                getPage();
            });
            gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
                paginationOptions.pageNumber = newPage;
                paginationOptions.pageSize = pageSize;
                getPage();
            });








        }

    };


    $scope.getRow=function(index){
        $scope.gridApi.selection.selectRow(index);
        var selRow=$scope.gridApi.selection.getSelectedRows();
        $scope.rowtobebinded=selRow[0]["First Name"]+" "+selRow[0]['Last Name'];
    };

    var getPage = function() {
        var url;
        switch(paginationOptions.sort) {
            case uiGridConstants.ASC:
                url = 'json/main.json';
                break;
            case uiGridConstants.DESC:
                url = 'json/main.json';
                break;
            default:
                url = 'json/main.json';
                break;
        }
        $http.get(url).then(successCallback, errorCallback);

        function successCallback(results){
            //success code
            $scope.gridOptions.totalItems = 100;
            var firstRow = (paginationOptions.pageNumber - 1) * paginationOptions.pageSize;
            $scope.gridOptions.data = results.data.slice(firstRow, firstRow + paginationOptions.pageSize);
        }
        function errorCallback(error){
            //error code
        }

    };

    getPage();
    vm.createNewPatient = function () {
        $state.go('main.newpatient', {});
    };

    vm.updatePatient=function(){
        $state.go('main.newpatient', {});
    };
}

module.exports = PatientListController;
