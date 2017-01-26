
'use strict';

AccountController.$inject = ['RequestRestApi', 'RestangularBaseService'];

function AccountController(RequestRestApi, RestangularBaseService) {
    var vm = this;

    // vm.AccountInfoCallback = function (results) {
    //     vm.accountData = results.data['account'];
    // };
    //
    // RequestRestApi.AccountInfo(vm.AccountInfoCallback);
}

module.exports = AccountController;
