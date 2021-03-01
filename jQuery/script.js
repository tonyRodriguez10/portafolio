$(document).ready(function()
	    {
	    $("#soft-skill--btn").on( "click", function() {	 
	        $(".soft-skills-container").toggle();
	         });
		$("#hard-skill--btn").on( "click", function() {	 
			$(".hard-skills-container").toggle();
			 });
			 $(function(){
				$('.popup').load('https://es.theysay.me/ranking/111/');
			  });
	    });
