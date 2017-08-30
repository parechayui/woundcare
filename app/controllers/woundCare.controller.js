
'use strict';

WoundCareController.$inject = ['$state'];

function WoundCareController($state) {
    var vm=this;

    vm.goToPatientList = function () {
        $state.go('main.patientlist', {});
    };


    vm.goToInvestigationReview = function () {
        $state.go('main.investigationreview', {});
    };

}

module.exports = WoundCareController;
