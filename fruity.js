var month = new Date();
var mm = month.getMonth()+1;


if(mm<10) {
	mm='0'+mm
}

month = mm;
console.log (month)