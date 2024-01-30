// JavaScript Document

list = 0;
$(document).ready(function(){ 	
	$("html").click(function(){ if(list!=1){ 
		  
		if($("#list-22").css('display') != 'none'){
			// $("#list-22").hide('slow');
		} 
		  
	}else{list=0;}}); 
});

$(document).ready(function(){ 	
    $("#toggle-button").click(function(){
        // $("#nav").slideToggle( "easeIn");
		});    
});
$(document).ready(function(){
	
	$("#drop-btn-22").click(function(){		 
		$("#list-22").slideToggle( "easeIn");
		//$("#list-1, #list-3").hide('slow');
		list = 1;
	});    
	
	// $("#drop-btn-23").click(function(){		 
	// 	$("#list-23").slideToggle( "easeIn");
		
	// 	list = 1;
	// });
});

