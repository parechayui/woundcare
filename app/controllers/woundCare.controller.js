
'use strict';

WoundCareController.$inject = ['$state'];

function WoundCareController($state) {
    var vm=this;

    vm.goToPatientList = function () {
        $state.go('main.patientlist', {});
    };


    vm.goToPhysicalExam = function () {
        $state.go('main.physicalexam', {});
    };

}

module.exports = WoundCareController;
