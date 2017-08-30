'use strict';

MainController.$inject = ['$state'];

function MainController($state) {
    var vm = this;
    vm.createNewPatient = function () {
        $state.go('main.newpatient', {});
    };


}

module.exports = MainController;
