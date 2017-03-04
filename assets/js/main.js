function convertiraCelsius(){
	var far = parseFloat(document.getElementById("farenheit").value);
		if( far != ""){
			document.getElementById("celsius").value = ((far-32)*5/9).toFixed(2);
		}
	

}

function convertiraFarenheit(){
	var cel = parseFloat(document.getElementById("celsius").value);
		if(cel != ""){
			document.getElementById("farenheit").value =((cel*9/5)+32).toFixed(2);
		}
	
}




