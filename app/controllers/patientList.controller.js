'use strict';

PatientListController.$inject = ['$state', '$http', 'uiGridConstants', 'RequestRestApi'];

function PatientListController($state, $http, uiGridConstants, RequestRestApi) {
    var vm = this;
    vm.data = {};
    vm.list = {
        active: true
    };
    var paginationOptions = {
        pageNumber: 1,
        pageSize: 25,
        sort: null
    };

    vm.gridOptions = {
        paginationPageSizes: [25, 50, 75],
        paginationPageSize: 25,
        useExternalPagination: true,
        useExternalSorting: true,
        enableFullRowSelection: true,
        enableRowSelection: true,
        columnDefs: [
            {name: 'First Name', enableSorting: false},
            {name: 'Last Name', enableSorting: false},
            {name: 'Last Visit', enableSorting: false},
            {name: 'Follow Up', enableSorting: false},
            {name: 'Status', enableSorting: false}
        ],
        multiSelect: false,
        onRegisterApi: function (gridApi) {
            vm.gridApi = gridApi;


            gridApi.pagination.on.paginationChanged(vm, function (newPage, pageSize) {
                paginationOptions.pageNumber = newPage;
                paginationOptions.pageSize = pageSize;

            });
        }

    };


    vm.getRow = function (index) {
        vm.gridApi.selection.selectRow(index);
        var selRow = vm.gridApi.selection.getSelectedRows();
        vm.rowtobebinded = selRow[0]["First Name"] + " " + selRow[0]['Last Name'];
    };

    vm.changeList = function (listVal) {
        if (listVal === 'active') {
            vm.list.active = true;
            getDifferList();
        }
        else {
            vm.list.active = false;
            getDifferList();
        }
    };


    var getDifferList = function () {
        var finalList = [];
        var firstRow = (paginationOptions.pageNumber - 1) * paginationOptions.pageSize;
        if (vm.list.active) {
            angular.forEach(vm.data, function (val, key) {
                if (val.Status === "Active") {
                    finalList.push(val);
                }
            });

            vm.gridOptions.data = finalList.slice(firstRow, firstRow + paginationOptions.pageSize);
        } else {
            angular.forEach(vm.data, function (val, key) {
                if (val.Status === "Inactive") {
                    finalList.push(val);
                }
            });
            vm.gridOptions.data = finalList.slice(firstRow, firstRow + paginationOptions.pageSize);
        }
    };

    var PatientListInfoCallback = function (results) {
        vm.gridOptions.totalItems = 100;

        vm.data = results.data;
        getDifferList();

    };

    RequestRestApi.PatientListInfo(PatientListInfoCallback);

    vm.createNewPatient = function () {
        $state.go('main.newpatient', {});
    };

    vm.updatePatient = function () {
        $state.go('main.newpatient', {});
    };
}

module.exports = PatientListController;
