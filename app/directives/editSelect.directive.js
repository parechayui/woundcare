function EditSelect(){
      return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'app/templates/editselect.html',
          scope:{
            options:"="
          },
          link: function(scope, iElement, iAttrs, ngModelCtrl) {
              ngModelCtrl.$formatters.push(function(modelValue) {
                  return {
                      selected: modelValue,
                  };
              });

              ngModelCtrl.$render = function() {
                  if (!ngModelCtrl.$viewValue) ngModelCtrl.$viewValue = { selected: ''};
                  scope.selected = ngModelCtrl.$viewValue.selected;
              };


              scope.$watch('selected', function() {
                  ngModelCtrl.$setViewValue({ selected: scope.selected});
              });


              ngModelCtrl.$parsers.push(function(viewValue) {
                  return viewValue.selected;
              });


          },
          controller: ['$scope', function($scope) {
              $scope.choose = function($event){
                  $scope.selected = $event.target.getAttribute('data-value');
              }
          }],
      };
    };

module.exports = EditSelect;