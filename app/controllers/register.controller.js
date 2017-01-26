/**
 * Created by pmathode on 10/26/2016.
 */

'use strict';

RegisterController.$inject = ['$state'];

function RegisterController($state) {
    var vm=this;
    vm.state=$state;


}

module.exports = RegisterController;