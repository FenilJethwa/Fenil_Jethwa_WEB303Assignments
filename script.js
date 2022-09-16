/*
	WEB 303 Assignment 1 - jQuery
	{Fenil Jethwa} Name
	{0805286} Student ID
*/

$(document).ready(function(){
// changeEvent //	
	$("input").change(function(){
		let Wage = $("#yearly-salary").val();
		let Proportion = $("#percent").val();
		let spentamt = ((Wage*Proportion)/100).toFixed(2);

// Calculation  //
		$("#amount").text("$" + spentamt);
	});
});