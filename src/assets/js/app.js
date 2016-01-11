$(document).ready(function() {
	$('.loadbar').each(function(i){
	  var row = $(this);
	  setTimeout(function() {
          row.toggleClass('active', !row.hasClass('active'));
      }, 100*i);
	});
});