'use strict';

angular
    .module('woundCare')
    .controller('mainController', require('./main.controller'));

angular
    .module('woundCare')
    .controller('patientListController', require('./patientList.controller'));

angular
    .module('woundCare')
    .controller('newPatientController', require('./newPatient.controller'));

angular
    .module('woundCare')
    .controller('woundCareController', require('./woundCare.controller'));

angular
    .module('woundCare')
    .controller('physicalExamController', require('./physicalExam.controller'));

angular
    .module('woundCare')
    .controller('investigationreviewController', require('./investigationReview.controller'));