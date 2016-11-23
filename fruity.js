var month = new Date();
var mm = month.getMonth()+1;


if(mm<10) {
	mm='0'+mm
}

month = mm;
console.log (month)

var data = {"fruits":[
			{
				"fruitname":"apples",
				"ripemonths": ["7", "8", "9", "10", "11"],
			},
			{
				"fruitname":"peaches",
				"ripemonths": ["6", "7", "8", "9"],
			},
			{
				"fruitname":"pears",
				"ripemonths": ["8", "9", "10",],
			},
]}

consol.log (data)
