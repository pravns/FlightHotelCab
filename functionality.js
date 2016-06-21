
function find_text() {
	var input_text = document.getElementById('info').value;
	var array = input_text.split(" ");
	for(var i=0; i<array.length; i++){
		if(array[i] === "flight"){
			flight_available();
		}
		else if(array[i] === "reaching" || array[i] === "cab"){
			cab_available();
		}
		else if(array[i] === "stay" || array[i] ==="hotel"){
			hotel_available();
		}
	}
	document.getElementById('info').value = '';    
}


function flight_available() {
	var flights = [1,2,3,4,5];
	var flight_name = ["IndiGo","JetAir","GoAir","Spicejet","AirIndia"];
	var flight_fare = ["3000 Rs", "4000 Rs", "4800 Rs", "5500 Rs", "2500 Rs"];
	var li = "";
	for (var i = 0; i < flights.length; i++) {
		li =  document.createElement('li');
		li.innerHTML = 	"<div class='fd"+flights[i]+"'>"+flight_name[i]+" and Fare: "+flight_fare[i]+"</div>"
		document.getElementById("roundedlist").appendChild(li);
		li = "";
	}
}

function hotel_available() {
	var hotels = [1,2,3,4,5];
 	var hotel_name = ["Hotel Taj","The Leela Palace","The Taj Mahal","The Oberoi Grand","Umaid Bhawan Palace"];
 	var hotel_fare = ["2000 Rs/day","5000 Rs/day","10000 Rs/day","12000 Rs/day","20000 Rs/day"];
	var li = "";
	for (var i = 0; i < hotels.length; i++) {
		li =  document.createElement('li');
		li.innerHTML = 	"<div class='fd"+hotels[i]+"'>"+hotel_name[i]+" and Fare: "+hotel_fare[i]+"</div>"
		document.getElementById("roundedlist1").appendChild(li);
		li = "";
	}
}

function cab_available() {
	var cabs = [1,2,3,4,5];
 	var cab_name = ["Taxi for sure","Uber","Ola","Spot city taxi ","Meru cabs","Mega cabs"];
 	var cab_fare = ["20 Rs/km","12 Rs/km","10 Rs/km","15 Rs/km","8 Rs/km","9 Rs/km"];
 	var li = "";
	for (var i = 0; i < cabs.length; i++) {
		li =  document.createElement('li');
		li.innerHTML = 	"<div class='fd"+cabs[i]+"'>"+cab_name[i]+" and Fare: "+cab_fare[i]+"</div>"
		document.getElementById("roundedlist2").appendChild(li);
		li = "";
	}
} 

function changeColour(choice) {
	var flights = [1,2,3,4,5];

	for (var i = 0; i < flights.length; i++) {
		var item = document.getElementsByClassName('fd'+flights[i])
		item[0].className = item[0].className.replace('active', '')
	};
	
	var selectedItem = document.getElementsByClassName('fd'+choice)
	selectedItem[0].className = selectedItem[0].className + 'active'

}

function changeColour1(choice) {
	var hotels = [1,2,3,4,5];

	for (var i = 0; i < hotels.length; i++) {
		var item = document.getElementsByClassName('fd'+hotels[i])
		item[0].className = item[0].className.replace('active', '')
	};
	
	var selectedItem = document.getElementsByClassName('fd'+choice)
	selectedItem[0].className = selectedItem[0].className + ' active'
}


function changeColour2(choice) {
	var cabs = [1,2,3,4,5];

	for (var i = 0; i < cabs.length; i++) {
		var item = document.getElementsByClassName('fd'+cabs[i])
		item[0].className = item[0].className.replace('active', '')
	}
	
	var selectedItem = document.getElementsByClassName('fd'+choice)
	selectedItem[0].className = selectedItem[0].className + 'active' ;
} 
