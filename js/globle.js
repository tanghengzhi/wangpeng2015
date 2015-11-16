$(document).ready(function(){
	$(".navul>li").mouseover(function(event) {
		$(this).children('.navbar-list').show().end().siblings().children('.navbar-list').hide();
	});
	
	$(".navul>li").mouseout(function(event) {
		$(this).children('.navbar-list').hide();
	});

});