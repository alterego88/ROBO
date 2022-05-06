$(document).ready(function(){

$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');

  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 130000,
    easing:'linear',
    step: function() {
      $this.text(Math.random()*(5-1))+5;time=time+rnd;if(time>487){time=487;},
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }
  });
});
});
