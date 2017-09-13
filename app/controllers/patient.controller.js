'use strict';

PatientController.$inject = ['$state','RequestRestApi'];

function PatientController($state,RequestRestApi) {
    var vm = this;
    vm.patientInfo={};
    vm.commonPatientInfo={};


    vm.goToPatientList = function () {
        $state.go('main.patientlist', {});
    };

    vm.goToWoundCare = function () {

        $state.go('main.woundcare', {PatientObj:vm.patientInfo});
    };

    var PatientInfoCallback=function(results){
        vm.patientInfo=results.data[0];
    };

//$state.params.PatientObj.id,
    RequestRestApi.PatientInfo(PatientInfoCallback);



}

module.exports = PatientController;
