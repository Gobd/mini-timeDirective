angular.module('timeApp').directive('showTime', function(){
  return {
    restrict: 'E',
    template: '<div> The current time is {{time}} </div><div>GMT time is {{gmtTime}} </div>',
    scope: {
      format: '@',

    },
    link: function(scope, element, attrs) {
      element.css({
        color: 'red',
        fontWeight: 'bold'
      });
      element.on('mousedown', function(){
        scope.time = new Date();
        scope.$apply();
      });
      var currentTime = new Date();
      scope.time = currentTime;
      scope.gmtTime = currentTime.toGMTString();
    }
  };
});
