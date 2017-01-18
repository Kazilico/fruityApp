var month = new Date();
var mm = month.getMonth()+1;


if(mm<10) {
	mm='0'+mm
}

month = mm;
console.log (month)

var data = {"fruits":[
			{
				"fruitname":"mulberries",
				"ripemonths": ["7", "8"],
			},
			{
				"fruitname":"nectarines",
				"ripemonths": ["5", "6", "7", "8", "9", "10"],
			},
			{
				"fruitname":"oranges",
				"ripemonths": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
			},
			{
				"fruitname":"peaches",
				"ripemonths": ["5", "6", "7", "8", "9", "10"],
			},
			{
				"fruitname":"pecans",
				"ripemonths": ["10"],
			},
			{
				"fruitname":"persimmons",
				"ripemonths": ["9", "10", "11"],
			},
			{
				"fruitname":"pistachios",
				"ripemonths": ["9", "10", "11"],
			},
			{
				"fruitname":"plums",
				"ripemonths": ["5", "6", "7", "8", "9", "10", "11"],
			},
			{
				"fruitname":"pomegranates",
				"ripemonths": ["9", "10", "11", "12"],
			},
			{
				"fruitname":"pomelos",
				"ripemonths": ["1", "2", "3", "4", "11", "12"],
			},
			{
				"fruitname":"quinces",
				"ripemonths": ["9", "10", "11"],
			},
			{
				"fruitname":"raspberries",
				"ripemonths": ["5", "6", "7", "8", "9", "10", "11"],
			},
			{
				"fruitname":"rhubard",
				"ripemonths": ["4", "5", "6", "7"],
			},
			{
				"fruitname":"strawberries",
				"ripemonths": ["3", "4", "5", "6", "7", "8", "9", "10", "11"],
			},
			{
				"fruitname":"tayberries",
				"ripemonths": ["6", "7", "8"],
			},
			{
				"fruitname":"tomatoes",
				"ripemonths": ["6", "7", "8", "9", "10", "11"],
			},
			{
				"fruitname":"walnuts",
				"ripemonths": ["10"],
			},
]}

console.log (data)
