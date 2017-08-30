
'use strict';

/*Common Functions will be written here  */

CommonService.inject = ['$uibModal', 'RequestRestApi', '$rootScope', '$timeout'];

function CommonService($uibModal, RequestRestApi, $rootScope, $timeout) {


    /*For Error or Attention Message Modal"*/

    var showModal = function (detailInfo) {
        $uibModal.open({
            ariaLabelledBy: 'modal-title-bottom',
            ariaDescribedBy: 'modal-body-bottom',
            templateUrl: 'app/templates/confirmModal.html',
            size: 'lg',
            backdrop: 'static',
            controller: 'AConfirmModalController',
            resolve: {
                detailInfo: function () {
                    return detailInfo;
                }
            }
        });
    };







    return {
        showModal: showModal
    };
};

module.exports = CommonService;