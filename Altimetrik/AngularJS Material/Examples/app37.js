var myApp = angular.module("myApp", ["ngAnimate"]);

myApp.animation('.repeat-animation', function() {
  return {
    enter : function(element, done) {
      $(element).css({
        position:'relative',
        left:-10,
        opacity:0
      });
      $(element).animate({
        left:0,
        opacity:1
      }, done);
    },

    leave : function(element, done) {
      $(element).css({
        position:'relative',
        left:0,
        opacity:1
      });
      $(element).animate({
        left:-10,
        opacity:0
      }, done);
    },

    move : function(element, done) {
      $(element).css({
        opacity:0.5
      });
      $(element).animate({
        opacity:1
      }, done);
    }
  };
});