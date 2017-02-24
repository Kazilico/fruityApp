var month = new Date();
var mm = month.getMonth()+1;


if(mm<10) {
	mm='0'+mm
}

month = mm;
console.log (month)

var data = 
{
	"fruits": [
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
	]
};

for(var i = 0; i < data.fruits.length; i++)
	{
		var fruit = data.fruits[i];
		var fruitName = fruit.name;
		for(var j = 0; j < fruit.ripeMonths.length; j++)
		{
			var ripened = fruit.ripeMonths[j];
		}
	}


console.log (ripened)
/*
console.log (data.fruits[5].ripeMonths);

console.log (data.fruits[5].length);
*/


	if (data.fruits[0].ripeMonths.indexOf(month) > -1) {

		console.log (!data.fruits[0].isRipe)
	} else {
		console.log (data.fruits[0].isRipe)
	}

	if (data.fruits[1].ripeMonths.indexOf(month) > -1) {

		console.log (!data.fruits[1].isRipe)
	} else {
		console.log (data.fruits[1].isRipe)
	}

	if (data.fruits[2].ripeMonths.indexOf(month) > -1) {

		console.log (!data.fruits[2].isRipe)
	} else {
		console.log (data.fruits[2].isRipe)
	}

	if (data.fruits[3].ripeMonths.indexOf(month) > -1) {

		console.log (!data.fruits[3].isRipe)
	} else {
		console.log (data.fruits[3].isRipe)
	}

	if (data.fruits[4].ripeMonths.indexOf(month) > -1) {

		console.log (!data.fruits[4].isRipe)
	} else {
		console.log (data.fruits[4].isRipe)
	}

	if (data.fruits[5].ripeMonths.indexOf(month) > -1) {

		console.log (!data.fruits[5].isRipe)
	} else {
		console.log (data.fruits[5].isRipe)
	}

	if (data.fruits[6].ripeMonths.indexOf(month) > -1) {

		console.log (!data.fruits[6].isRipe)
	} else {
		console.log (data.fruits[6].isRipe)
	}

	if (data.fruits[7].ripeMonths.indexOf(month) > -1) {

		console.log (!data.fruits[7].isRipe)
	} else {
		console.log (data.fruits[7].isRipe)
	}

	if (data.fruits[8].ripeMonths.indexOf(month) > -1) {

		console.log (!data.fruits[8].isRipe)
	} else {
		console.log (data.fruits[8].isRipe)
	}

	if (data.fruits[9].ripeMonths.indexOf(month) > -1) {

		console.log (!data.fruits[9].isRipe)
	} else {
		console.log (data.fruits[9].isRipe)
	}

	if (data.fruits[10].ripeMonths.indexOf(month) > -1) {

		console.log (!data.fruits[10].isRipe)
	} else {
		console.log (data.fruits[10].isRipe)
	}

	if (data.fruits[11].ripeMonths.indexOf(month) > -1) {

		console.log (!data.fruits[11].isRipe)
	} else {
		console.log (data.fruits[11].isRipe)
	}

	if (data.fruits[12].ripeMonths.indexOf(month) > -1) {

		console.log (!data.fruits[12].isRipe)
	} else {
		console.log (data.fruits[12].isRipe)
	}

	if (data.fruits[13].ripeMonths.indexOf(month) > -1) {

		console.log (!data.fruits[13].isRipe)
	} else {
		console.log (data.fruits[13].isRipe)
	}

	if (data.fruits[14].ripeMonths.indexOf(month) > -1) {

		console.log (!data.fruits[14].isRipe)
	} else {
		console.log (data.fruits[14].isRipe)
	}

	if (data.fruits[15].ripeMonths.indexOf(month) > -1) {

		console.log (!data.fruits[15].isRipe)
	} else {
		console.log (data.fruits[15].isRipe)
	}

	if (data.fruits[16].ripeMonths.indexOf(month) > -1) {

		console.log (!data.fruits[16].isRipe)
	} else {
		console.log (data.fruits[16].isRipe)
	}




/*
if (data.fruits[0].ripeMonths === month){
	(data.fruits[0].isRipe === true)
} else {
	(data.fruits[0].isRipe === false)
}

if (data.fruits[1].ripeMonths === month){
	(data.fruits[1].isRipe === true)
} else {
	(data.fruits[1].isRipe === false)
}

if (data.fruits[2].ripeMonths === month){
	(data.fruits[2].isRipe === true)
} else {
	(data.fruits[2].isRipe === false)
}

if (data.fruits[3].ripeMonths === month){
	(data.fruits[3].isRipe === true)
} else {
	(data.fruits[3].isRipe === false)
}

if (data.fruits[4].ripeMonths === month){
	(data.fruits[4].isRipe === true)
} else {
	(data.fruits[4].isRipe === false)
}

if (data.fruits[5].ripeMonths === month){
	(data.fruits[5].isRipe === true)
} else {
	(data.fruits[5].isRipe === false)
}

if (data.fruits[6].ripeMonths === month){
	(data.fruits[6].isRipe === true)
} else {
	(data.fruits[6].isRipe === false)
}

if (data.fruits[7].ripeMonths === month){
	(data.fruits[7].isRipe === true)
} else {
	(data.fruits[7].isRipe === false)
}

if (data.fruits[8].ripeMonths === month){
	(data.fruits[8].isRipe === true)
} else {
	(data.fruits[8].isRipe === false)
}

if (data.fruits[9].ripeMonths === month){
	(data.fruits[9].isRipe === true)
} else {
	(data.fruits[9].isRipe === false)
}

if (data.fruits[10].ripeMonths === month){
	(data.fruits[10].isRipe === true)
} else {
	(data.fruits[10].isRipe === false)
}

if (data.fruits[11].ripeMonths === month){
	(data.fruits[11].isRipe === true)
} else {
	(data.fruits[11].isRipe === false)
}

if (data.fruits[12].ripeMonths === month){
	(data.fruits[12].isRipe === true)
} else {
	(data.fruits[12].isRipe === false)
}

if (data.fruits[13].ripeMonths === month){
	(data.fruits[13].isRipe === true)
} else {
	(data.fruits[13].isRipe === false)
}

if (data.fruits[14].ripeMonths === month){
	(data.fruits[14].isRipe === true)
} else {
	(data.fruits[14].isRipe === false)
}

if (data.fruits[15].ripeMonths === month){
	(data.fruits[15].isRipe === true)
} else {
	(data.fruits[15].isRipe === false)
}

if (data.fruits[16].ripeMonths === month){
	(data.fruits[16].isRipe === true)
} else {
	(data.fruits[16].isRipe === false)
}

console.log (data.fruits[0].isRipe)

console.log (data.fruits[1].isRipe)

console.log (data.fruits[2].isRipe)

console.log (data.fruits[3].isRipe)

console.log (data.fruits[4].isRipe)

console.log (data.fruits[5].isRipe)

console.log (data.fruits[6].isRipe)

console.log (data.fruits[7].isRipe)

console.log (data.fruits[8].isRipe)

console.log (data.fruits[9].isRipe)

console.log (data.fruits[10].isRipe)

console.log (data.fruits[11].isRipe)

console.log (data.fruits[12].isRipe)

console.log (data.fruits[13].isRipe)

console.log (data.fruits[14].isRipe)

console.log (data.fruits[15].isRipe)

console.log (data.fruits[16].isRipe)

*/