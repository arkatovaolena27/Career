$(document).ready(function(){
	$('.header').height($(window).height());
	})
	
	$(".navbar a").click(function(){
$("body,html").animate({
scrollTop:$("#" + $(this).data('value')).offset().top
},1000)
})


	let num1=5;
let num2=10

let rand = Math.floor(num1+Math.floor()*(num2-num1+1));
console.log(rand);
