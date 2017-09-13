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
            {name: 'firstName', enableSorting: false},
            {name: 'lastName', enableSorting: false},
            {name: 'lastVisit', enableSorting: false},
            {name: 'followUp', enableSorting: false},
            {name: 'status', enableSorting: false}
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
        vm.presentPatient =vm.gridApi.selection.getSelectedRows();
    };

    vm.changeListView = function (listVal) {
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
                if (val.status === "Active") {
                    finalList.push(val);
                }
            });

            vm.gridOptions.data = finalList.slice(firstRow, firstRow + paginationOptions.pageSize);
        } else {
            angular.forEach(vm.data, function (val, key) {
                if (val.status === "Inactive") {
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
        $state.go('main.patient', {});
    };

    vm.updatePatient = function () {
        $state.go('main.patient', {PatientObj:vm.presentPatient[0]});
    };
}

module.exports = PatientListController;
