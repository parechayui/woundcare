function MyContract(){
      return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'app/templates/contract.html'
      };
    };

module.exports = MyContract;