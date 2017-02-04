var month = new Date();
var mm = month.getMonth()+1;


if(mm<10) {
	mm='0'+mm
}

month = mm;
console.log (month)

var data = {"fruits":[
			{
				"fruitName":"mulberries",
				"ripeMonths": ["07", "08"],
				"isRipe": false, 
			},
			{
				"fruitName":"nectarines",
				"ripeMonths": ["05", "06", "07", "08", "09", "10"],
				"isRipe": false,
			},
			{
				"fruitName":"oranges",
				"ripeMonths": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
				"isRipe": false,
			},
			{
				"fruitName":"peaches",
				"ripeMonths": ["05", "06", "07", "08", "09", "10"],
				"isRipe": false,
			},
			{
				"fruitName":"pecans",
				"ripeMonths": ["10"],
				"isRipe": false,
			},
			{
				"fruitName":"persimmons",
				"ripeMonths": ["09", "10", "11"],
				"isRipe": false,
			},
			{
				"fruitName":"pistachios",
				"ripeMonths": ["09", "10", "11"],
				"isRipe": false,
			},
			{
				"fruitName":"plums",
				"ripeMonths": ["05", "06", "07", "08", "09", "10", "11"],
				"isRipe": false,
			},
			{
				"fruitName":"pomegranates",
				"ripeMonths": ["09", "10", "11", "12"],
				"isRipe": false,
			},
			{
				"fruitName":"pomelos",
				"ripeMonths": ["01", "02", "03", "04", "11", "12"],
				"isRipe": false,
			},
			{
				"fruitName":"quinces",
				"ripeMonths": ["09", "10", "11"],
				"isRipe": false,
			},
			{
				"fruitName":"raspberries",
				"ripeMonths": ["05", "06", "07", "08", "09", "10", "11"],
				"isRipe": false,
			},
			{
				"fruitName":"rhubard",
				"ripeMonths": ["04", "05", "06", "07"],
				"isRipe": false,
			},
			{
				"fruitName":"strawberries",
				"ripeMonths": ["03", "04", "05", "06", "07", "08", "09", "10", "11"],
				"isRipe": false,
			},
			{
				"fruitName":"tayberries",
				"ripeMonths": ["06", "07", "08"],
				"isRipe": false,
			},
			{
				"fruitName":"tomatoes",
				"ripeMonths": ["06", "07", "08", "09", "10", "11"],
				"isRipe": false,
			},
			{
				"fruitName":"walnuts",
				"ripeMonths": ["10"],
				"isRipe": false,
			},
]}



console.log (data[5]);

/*
var ripe = 
	if month == data.fruits.ripeMonths {
	then data.fruits.isRipe == true
}

console.log (data.fruits.isRipe)
*/