$(document).ready(function(){
    $("#dalton").click(function(){
        if (clicked) {
        	$("#menu").addClass("bg-inverse");
		clicked  = false;
        } else {
        	$("#menu").removeClass("bg-inverse");
		clicked  = true;
        }
    });
});