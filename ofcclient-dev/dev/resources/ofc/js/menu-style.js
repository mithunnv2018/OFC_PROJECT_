// JavaScript Document

list = 0;
$(document).ready(function(){ 	
	$("html").click(function(){ if(list!=1){ if($("#list-1").css('display') != 'none'){$("#list-1").hide('slow');} if($("#list-2").css('display') != 'none'){$("#list-2").hide('slow');} if($("#list-3").css('display') != 'none'){$("#list-3").hide('slow');} }else{list=0;}}); 
});

$(document).ready(function(){ 	
    $("#toggle-button").click(function(){
        $("#nav").slideToggle( "easeIn");
		});    
});
$(document).ready(function(){
    $("#drop-btn-1").click(function(){		
        $("#list-1").slideToggle( "easeIn");
		$("#list-2, #list-3").hide('slow');
		list = 1;
	});    
});
$(document).ready(function(){
    $("#drop-btn-2").click(function(){		 
        $("#list-2").slideToggle( "easeIn");
		$("#list-1, #list-3").hide('slow');
		list = 1;
	});    
});
$(document).ready(function(){
    $("#drop-btn-3").click(function(){		 
        $("#list-3").slideToggle( "easeIn");
		$("#list-1, #list-2").hide('slow');
		list = 1;
	});    
});

