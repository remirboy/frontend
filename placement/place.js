var count = 0;
var list = document.getElementsByClassName('check');

function takePlace(input){
	if (input.checked==1&&count<7){
		count+=1;
		setPlace()
	}
	if (count==7){
		exception="Макс. кол-во билетов:7";
 		document.getElementById('place_help').innerHTML = exception;
		placeBlocking(list);
	}
	if (count<=7&&input.checked==0) {
		count-=1;
		setPlace();
		placeOpening(list);
	}
}

function placeBlocking(list){
	for (var index = 0; index < list.length; ++index) 
    	if(list[index].checked==0)
    			list[index].disabled=1;
}

function placeOpening(list){
	for (var index = 0; index < list.length; ++index) 
    	list[index].disabled=0;
}

function setPlace(){
	document.getElementById('number').innerHTML = count;
}