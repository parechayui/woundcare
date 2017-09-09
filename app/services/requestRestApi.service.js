'use strict';

/* RestAngular factory Starts  */


RequestRestApi.$inject = ['RestangularBaseService','RestEndPoint'];

function RequestRestApi(RestangularBaseService,RestEndPoint) {

    var PatientListInfo = function (PatientListInfoCallback) {
        RestangularBaseService.getdata(RestEndPoint.PatientList, PatientListInfoCallback);
    };




    return {
       PatientListInfo: PatientListInfo
    };
};
/* RestAngular Factory Ends  */
module.exports = RequestRestApi;

