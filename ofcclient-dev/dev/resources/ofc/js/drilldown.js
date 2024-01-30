// JavaScript Document
	 // DOM ready
	 $(function() {
	   var acc_sub_head = 'acc-sub-head';
	   var acc_sub_details = 'acc-sub-details';
      // Create the dropdown base
      $("<select />", {
			"class": "nav-select"         
      }).appendTo("nav");
      
      // Create default option "Go to..."
      $("<option />", {
         "selected": "selected",
         "value"   : "",
         "text"    : "Select"
      }).appendTo("nav select");
      
      // Populate dropdown with menu items
      $("nav:eq(0) a").each(function() {
       var el = $(this);
       $("<option />", {
           "value"   : el.attr("href"),
           "text"    : el.text()
       }).appendTo("nav:eq(0) select");
      });
	  $("nav:eq(1) a").each(function() {
       var el = $(this);
       $("<option />", {
           "value"   : el.attr("href"),
           "text"    : el.text()
       }).appendTo("nav:eq(1) select");
      });
      
	   // To make dropdown actually work
	   // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
      $("nav select").change(function() {
        window.location = $(this).find("option:selected").val();
      });	 
	 $(function(){ setInterval( function(){ $(' #'+acc_sub_head).unbind().click(function(){var acc_details = $(this).next('div'); acc_details.toggle('easing'); $(' #'+acc_sub_details).not(acc_details).hide('slow');  }); },100);  }); // Account Inner  Details
 });
