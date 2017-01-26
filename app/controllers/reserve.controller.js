/**
 * Created by pmathode on 10/13/2016.
 */
'use strict';

ReserveController.$inject = ['RequestRestApi'];

function ReserveController(RequestRestApi) {
    var vm = this;

    // vm.ResortListInfoCallback = function (results) {
    //     vm.resortList  = results.data['sl_home'];
    // };

    // RequestRestApi.ResortListInfo(vm.ResortListInfoCallback);

}

module.exports = ReserveController;

