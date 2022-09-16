/*
	WEB 303 Assignment 1 - jQuery
	{Fenil Jethwa}
*/

$(document).ready(function(){
	$("input").change(function(){
		let Wage = $("#yearly-salary").val();
		let Proportion = $("#percent").val();
		let spentamt = ((Wage*Proportion)/100).toFixed(2);

		$("#amount").text("$" + spentamt);
	});
});