'use strict';

AConfirmModalController.$inject = ['$uibModalInstance', 'detailInfo', '$scope', 'CommonService', 'RequestRestApi', '$state', '$stateParams', 'RestRequestForm'];

function AConfirmModalController($uibModalInstance, detailInfo, $scope, CommonService, RequestRestApi, $state, $stateParams, RestRequestForm) {

    $scope.detailInfo = detailInfo;



    $scope.ok = function () {

        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        if ($scope.detailInfo.changeView === 'true') {
            commonFunction();
        }
        $uibModalInstance.dismiss('cancel');
    };
};

module.exports = AConfirmModalController;