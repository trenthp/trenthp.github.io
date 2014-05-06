$(document).ready(function(){

	$('nav').smint();

});

$(window).on('beforeunload', function(){
  
	$(window).scrollTop(0);

});