/**
 * Created by pmathode on 10/27/2016.
 */

'use strict';

MainAppController.$inject = ['$state'];

function MainAppController($state) {
    var vm=this;
    vm.state=$state.current.name;


}

module.exports = MainAppController;
