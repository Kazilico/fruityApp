/*
var month = new Date();
var mm = month.getMonth()+1;


if(mm<10) {
	mm='0'+mm
}

month = mm;
console.log (month)
*/

$(document).ready(function() {

	var fruits = [
	 		
			{
				"name":"mulberries",
				"ripeMonths": [7, 8],
				"isRipe": false, 
			},
			{
				"name":"nectarines",
				"ripeMonths": [5, 6, 7, 8, 9, 10],
				"isRipe": false,
			},
			{
				"name":"oranges",
				"ripeMonths": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
				"isRipe": false,
			},
			{
				"name":"peaches",
				"ripeMonths": [5, 6, 7, 8, 9, 10],
				"isRipe": false,
			},
			{
				"name":"pecans",
				"ripeMonths": [10],
				"isRipe": false,
			},
			{
				"name":"persimmons",
				"ripeMonths": [9, 10, 11],
				"isRipe": false,
			},
			{
				"name":"pistachios",
				"ripeMonths": [9, 10, 11],
				"isRipe": false,
			},
			{
				"name":"plums",
				"ripeMonths": [5, 6, 7, 8, 9, 10, 11],
				"isRipe": false,
			},
			{
				"name":"pomegranates",
				"ripeMonths": [9, 10, 11, 12],
				"isRipe": false,
			},
			{
				"name":"pomelos",
				"ripeMonths": [1, 2, 3, 4, 11, 12],
				"isRipe": false,
			},
			{
				"name":"quinces",
				"ripeMonths": [9, 10, 11],
				"isRipe": false,
			},
			{
				"name":"raspberries",
				"ripeMonths": [5, 6, 7, 8, 9, 10, 11],
				"isRipe": false,
			},
			{
				"name":"rhubard",
				"ripeMonths": [4, 5, 6, 7],
				"isRipe": false,
			},
			{
				"name":"strawberries",
				"ripeMonths": [3, 4, 5, 6, 7, 8, 9, 10, 11],
				"isRipe": false,
			},
			{
				"name":"tayberries",
				"ripeMonths": [6, 7, 8],
				"isRipe": false,
			},
			{
				"name":"tomatoes",
				"ripeMonths": [6, 7, 8, 9, 10, 11],
				"isRipe": false,
			},
			{
				"name":"walnuts",
				"ripeMonths": [10],
				"isRipe": false,
			},
		];

	var container = $("#fruits");
	var month = (new Date().getMonth() + 1);

	$.each(fruits, function(i, fruit) {

		var p = $('<p>');
		var title = "The fruit is ripe on ".concat(
			fruit.ripeMonths.join(", ")

		);

		p.text(fruit.name);
		p.prop("title", title);
		if (fruit.ripeMonths.indexOf(month) != -1) {
			p.addClass("highlight");
		}

	});

});

/*	
for (i = 0; i < fruits.length; i++) {
	if (fruits[i].ripeMonths.indexOf(month) > -1) {

		(fruits[i].isRipe) = true;
		document.querySelector(".fruit." + fruits[i].name + " .layer").classList.add("inseason");
	} else {
		(fruits[i].isRipe) = false;
		
		document.querySelector(".fruit." + fruits[i].name + " .layer").classList.remove("inseason");
		
	}

};
	
console.log (fruits)
*/
