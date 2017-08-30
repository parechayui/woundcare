'use strict';

NewPatientController.$inject = ['$state'];

function NewPatientController($state) {
    var vm = this;


    vm.goToPatientList = function () {
        $state.go('main.patientlist', {});
    };

    vm.goToWoundCare = function () {
        $state.go('main.woundcare', {});
    };


}

module.exports = NewPatientController;
