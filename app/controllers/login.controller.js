/**
 * Created by pmathode on 10/26/2016.
 */

'use strict';

LoginController.$inject = ['$state'];

function LoginController($state) {
    var vm=this;
    vm.state=$state;
    vm.myname="login";

}

module.exports = LoginController;