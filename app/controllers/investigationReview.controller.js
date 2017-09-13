'use strict';

InvestigationReviewController.$inject = ['$state'];

function InvestigationReviewController($state) {
    var vm = this;

 vm.savePatientInfo = function () {
        $state.go('main.patientlist', {});
    };

    vm.cancel = function () {
        $state.go('main.patientlist', {});
    };


};

module.exports = InvestigationReviewController;
