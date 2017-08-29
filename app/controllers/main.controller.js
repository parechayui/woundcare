
'use strict';

MainController.$inject = ['$state'];

function MainController($state) {
    var vm=this;
    vm.state=$state.current.name;


}

module.exports = MainController;
