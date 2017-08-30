'use strict';

InvestigationReviewController.$inject = ['$state'];

function InvestigationReviewController($state) {
    var vm = this;


    vm.goToPatientList = function () {
        $state.go('main.patientlist', {});
    };

 vm.goToPatientList = function () {
        $state.go('main.patientlist', {});
    };




};

module.exports = InvestigationReviewController;
