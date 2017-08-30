
'use strict';

PatientListController.$inject = ['$state'];

function PatientListController($state) {
    var vm=this;

    vm.createNewPatient = function () {
        $state.go('main.newpatient', {});
    };

    vm.updatePatient=function(){
        $state.go('main.newpatient', {});
    };
}

module.exports = PatientListController;
