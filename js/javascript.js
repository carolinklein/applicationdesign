$(document).ready(function(){

	/*$(".btn_icon").click(function() {
		console.log("click");
	});


	$(".btn").hover(function() {
		$(".btn").toggleClass("btnActive");
	});


	$(".btn").hover(function() {
		$(".btn-text").toggleClass("btnActive");
	});*/

$( "button" ).click(function() {
	$( ".dropdown-text" ).slideToggle( "slow" );
});

});

function initialize()
{
	var mapOpt = {
		center:new google.maps.LatLng(51.508742,-0.120850),
		zoom:5,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map=new google.maps.Map(document.getElementById("googleMap"),mapOpt);
}

google.maps.event.addDomListener(window, 'load', initialize);