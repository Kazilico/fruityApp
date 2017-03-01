var month = new Date();
var mm = month.getMonth()+1;


if(mm<10) {
	mm='0'+mm
}

month = mm;
console.log (month)

var fruits = [
	 		
			{
				"name":"mulberries",
				"ripeMonths": ["07", "08"],
				"isRipe": false, 
			},
			{
				"name":"nectarines",
				"ripeMonths": ["05", "06", "07", "08", "09", "10"],
				"isRipe": false,
			},
			{
				"name":"oranges",
				"ripeMonths": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
				"isRipe": false,
			},
			{
				"name":"peaches",
				"ripeMonths": ["05", "06", "07", "08", "09", "10"],
				"isRipe": false,
			},
			{
				"name":"pecans",
				"ripeMonths": ["10"],
				"isRipe": false,
			},
			{
				"name":"persimmons",
				"ripeMonths": ["09", "10", "11"],
				"isRipe": false,
			},
			{
				"name":"pistachios",
				"ripeMonths": ["09", "10", "11"],
				"isRipe": false,
			},
			{
				"name":"plums",
				"ripeMonths": ["05", "06", "07", "08", "09", "10", "11"],
				"isRipe": false,
			},
			{
				"name":"pomegranates",
				"ripeMonths": ["09", "10", "11", "12"],
				"isRipe": false,
			},
			{
				"name":"pomelos",
				"ripeMonths": ["01", "02", "03", "04", "11", "12"],
				"isRipe": false,
			},
			{
				"name":"quinces",
				"ripeMonths": ["09", "10", "11"],
				"isRipe": false,
			},
			{
				"name":"raspberries",
				"ripeMonths": ["05", "06", "07", "08", "09", "10", "11"],
				"isRipe": false,
			},
			{
				"name":"rhubard",
				"ripeMonths": ["04", "05", "06", "07"],
				"isRipe": false,
			},
			{
				"name":"strawberries",
				"ripeMonths": ["03", "04", "05", "06", "07", "08", "09", "10", "11"],
				"isRipe": false,
			},
			{
				"name":"tayberries",
				"ripeMonths": ["06", "07", "08"],
				"isRipe": false,
			},
			{
				"name":"tomatoes",
				"ripeMonths": ["06", "07", "08", "09", "10", "11"],
				"isRipe": false,
			},
			{
				"name":"walnuts",
				"ripeMonths": ["10"],
				"isRipe": false,
			},
];

var ripeFruits= [];

	
		for (i = 0; i < fruits.length; i++) {
			if (fruits[i].ripeMonths.indexOf(month) > -1) {

				(!fruits[i].isRipe.push)
			} else {
				(fruits[i].isRipe.push)
			}

		};
	


console.log(ripeFruits)