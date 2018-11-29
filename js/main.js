$(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
});

$("#yes").click(function(){
	$("#coming").toggleClass("show");
	$("#cancel").toggleClass("show");
})
$("#cancel").click(function(){
	$("#coming").toggleClass("show");
	$("#cancel").toggleClass("show");
})


function getLocation() {
    confirm("Car Wash Station wants to know your location");
}