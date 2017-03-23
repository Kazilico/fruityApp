var fruits = [
	 		
	{
		"name":"Mulberries",
		"ripeMonths": ["07", "08"],
		"isRipe": false, 
	},
	{
		"name":"Nectarines",
		"ripeMonths": ["05", "06", "07", "08", "09", "10"],
		"isRipe": false,
	},
	{
		"name":"Oranges",
		"ripeMonths": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
		"isRipe": false,
	},
	{
		"name":"Peaches",
		"ripeMonths": ["05", "06", "07", "08", "09", "10"],
		"isRipe": false,
	},
	{
		"name":"Pecans",
		"ripeMonths": ["10"],
		"isRipe": false,
	},
	{
		"name":"Persimmons",
		"ripeMonths": ["09", "10", "11"],
		"isRipe": false,
	},
	{
		"name":"Pistachios",
		"ripeMonths": ["09", "10", "11"],
		"isRipe": false,
	},
	{
		"name":"Plums",
		"ripeMonths": ["05", "06", "07", "08", "09", "10", "11"],
		"isRipe": false,
	},
	{
		"name":"Pomegranates",
		"ripeMonths": ["09", "10", "11", "12"],
		"isRipe": false,
	},
	{
		"name":"Pomelos",
		"ripeMonths": ["01", "02", "03", "04", "11", "12"],
		"isRipe": false,
	},
	{
		"name":"Quinces",
		"ripeMonths": ["09", "10", "11"],
		"isRipe": false,
	},
	{
		"name":"Raspberries",
		"ripeMonths": ["05", "06", "07", "08", "09", "10", "11"],
		"isRipe": false,
	},
	{
		"name":"Rhubarb",
		"ripeMonths": ["04", "05", "06", "07"],
		"isRipe": false,
	},
	{
		"name":"Strawberries",
		"ripeMonths": ["03", "04", "05", "06", "07", "08", "09", "10", "11"],
		"isRipe": false,
	},
	{
		"name":"Tayberries",
		"ripeMonths": ["06", "07", "08"],
		"isRipe": false,
	},
	{
		"name":"Tomatoes",
		"ripeMonths": ["06", "07", "08", "09", "10", "11"],
		"isRipe": false,
	},
	{
		"name":"Walnuts",
		"ripeMonths": ["10"],
		"isRipe": false,
	},
];

var month = new Date();
var mm = month.getMonth()+1;


if (mm < 10) {
	mm = '0' + mm
}

month = mm;

for (i = 0; i < fruits.length; i++) {
    if (fruits[i].ripeMonths.indexOf(month) > -1) {

        (fruits[i].isRipe) = true
    } else {
        (fruits[i].isRipe) = false
    }
};

function render() {
    for (i = 0; i < fruits.length; i++) {
        var fruit = document.createElement('div');
        fruit.setAttribute('id', fruits[i].name);
        
        if (fruits[i].isRipe == true) {
        	fruit.setAttribute('class', ('ripeFruit ' + fruits[i].name + ' layer'));
				} else {
          fruit.setAttribute('class', ('fruit ' + fruits[i].name));
        }
        
        var fruitText = document.createElement('span');
        fruitText.setAttribute('class', 'fruitText');

        var fruitTextNode = document.createTextNode(fruits[i].name);
        fruitText.appendChild(fruitTextNode);

        fruit.appendChild(fruitText);
        document.body.appendChild(fruit);
    }
}

render();

