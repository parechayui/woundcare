
'use strict';

PhysicalExamController.$inject = ['$state'];

function PhysicalExamController($state) {
    var vm=this;

    vm.goToPatientList = function () {
        $state.go('main.patientlist', {});
    };


    vm.goToWoundCare = function () {
        $state.go('main.woundcare', {});
    };

}

module.exports = PhysicalExamController;
