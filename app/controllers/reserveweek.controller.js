/**
 * Created by pmathode on 10/13/2016.
 */
'use strict';

function ReserveWeekController() {
    var vm = this;

    vm.nameList=[   ];

    vm.authGuest=[];


    vm.addGuest=function(){
        vm.nameList.push({});

    };

    vm.deleteGuest=function(index){
        vm.nameList.splice(index,1);
    };

    vm.addAuthFirstGuest=function(){
        if(vm.authGuest.length<1){
            vm.authGuest.push({
                'firstname':"",
                'lastname':"",
                'staddress':"",
                'address':"",
                'pnumber':"",
                'email':""
            });
        }
    }

    vm.addAuthGuest=function(){
        vm.authGuest.push({
            'firstname':"",
            'lastname':"",
            'staddress':"",
            'address':"",
            'pnumber':"",
            'email':""
        });

    };

    vm.deleteAuthGuest=function(index){
        vm.authGuest.splice(index,1);
    };


}

module.exports = ReserveWeekController;

