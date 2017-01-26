'use strict';

/* RestAngular factory Starts  */


RequestRestApi.$inject = ['RestangularBaseService'];

function RequestRestApi(RestangularBaseService) {

    var AccountInfo = function (AccountInfoCallback) {
        RestangularBaseService.getdata("db", AccountInfoCallback);
    };

    var ResortListInfo= function (ResortListInfoCallback) {
        RestangularBaseService.getdata("db", ResortListInfoCallback);
    };

    var DestinationListInfo= function (url,DestinationListInfoCallback) {
        RestangularBaseService.getdata(url, DestinationListInfo);
    };

    return {
        ResortListInfo:ResortListInfo,
        AccountInfo: AccountInfo,
        DestinationListInfo:DestinationListInfo


    };
};
/* RestAngular Factory Ends  */
module.exports = RequestRestApi;

