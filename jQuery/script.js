$(document).ready(function()
	    {
	    $("#soft-skill--btn").on( "click", function() {	 
	        $(".soft-skills-container").toggle();
	         });
		$("#hard-skill--btn").on( "click", function() {	 
			$(".hard-skills-container").toggle();
			 });
			 
		$("#spanish--btn").on( "click", function() {	 
			$(".popup-spanish").toggle();
			});
		$("#english--btn").on( "click", function() {	 
			$(".popup-english").toggle();
			});
		$("#portugues--btn").on( "click", function() {	 
			$(".popup-portugues").toggle();
			});

			$('nav ul li > a:not(:only-child)').click(function(e) {
				$(this).siblings('.nav-submenu').toggle();
				$('.nav-submenu').not($(this).siblings()).hide();
				e.stopPropagation();
			  });
			
			  $('html').click(function() {
				$('.nav-submenu').hide();
			  });
			  
			  $('#nav-boton').click(function() {
				$('nav ul').toggle()
				$('#nav-boton').toggleClass("activo");
			  })
			

	    });
