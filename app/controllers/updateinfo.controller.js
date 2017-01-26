/**
 * Created by pmathode on 1/5/2017.
 */


'use strict';

UpdateInfoController.$inject = [];

function UpdateInfoController() {

    var vm = this;
    vm.editInfo = true;

    vm.updateContact = function () {
        if (vm.editInfo === true) {
            vm.editInfo = false;
        } else {
            vm.editInfo = true;
        }
    }


}

module.exports = UpdateInfoController;

