$(document).ready(function(){

$("#registerBtn").click(function(){

$("#message").text(
"Registration Successful"
);

});

$("#showBtn").click(function(){

$(".card").fadeIn();

});

$("#hideBtn").click(function(){

$(".card").fadeOut();

});

});