'use strict';

/* RestAngular factory Starts  */


RequestRestApi.$inject = ['RestangularBaseService','RestEndPoint'];

function RequestRestApi(RestangularBaseService,RestEndPoint) {

    var PatientListInfo = function (PatientListInfoCallback) {
        RestangularBaseService.getdata(RestEndPoint.PatientList, PatientListInfoCallback);
    };

    var PatientInfo = function (PatientInfoCallback) {
        //Receive Id and Use it
        RestangularBaseService.getdata(RestEndPoint.PatientInfo, PatientInfoCallback);
    };



    return {
       PatientListInfo: PatientListInfo,
        PatientInfo:PatientInfo
    };
};
/* RestAngular Factory Ends  */
module.exports = RequestRestApi;

