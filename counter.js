$(document).ready(function(){

$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');

  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 90000,
    easing:'linear',
    step: function() {
      $this.text(Math.andom()*(5-1))+5);
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }
  });
});
});
