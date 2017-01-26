'use strict';

 HomeController.$inject = ['RequestRestApi'];

function HomeController(RequestRestApi) {
    var vm = this;


    //     vm.ListInfoCallback = function (results) {
    //         vm.resortList  = results.data['sl_home'];
    //     };
    //
    // RequestRestApi.ListInfo(vm.ListInfoCallback);
}

module.exports = HomeController;