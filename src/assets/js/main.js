$(document).ready(function(){
	var hash = window.location.hash;
	if(hash !== '/' && hash !== ''){
		
		$("html, body").animate({
	        scrollTop: $(hash).offset().top - 100
	    }, 2e3);
	}

	$('#version').text($().jquery + 'teste');
});