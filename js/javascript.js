$(document).ready(function(){

	$(".btn_icon").click(function() {
		console.log("click");
	});


	$(".btn").hover(function() {
		$(".btn").toggleClass("btnActive");
	});


	$(".btn").hover(function() {
		$(".btn-text").toggleClass("btnActive");
	});


});