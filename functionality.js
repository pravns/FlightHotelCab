
function find_text() {
	var input_text = document.getElementById('info').value;
	//var array = input_text.split(" ");
	
	if(input_text.indexOf('flight') >= 0){
			available("flight");
	}
	else if(input_text.indexOf('hotel') >= 0){
			available("hotel");
	}
	else if(input_text.indexOf('cab') >= 0){
			available("cab");
	}
	
	document.getElementById('info').value = '';    
}

var index = [1,2,3,4,5];
var flight_name = ["IndiGo","JetAir","GoAir","Spicejet","AirIndia"];
var flight_fare = ["3000 Rs", "4000 Rs", "4800 Rs", "5500 Rs", "2500 Rs"];
var hotel_name = ["Hotel Taj","The Leela Palace","The Taj Mahal","The Oberoi Grand","Umaid Bhawan Palace"];
var hotel_fare = ["2000 Rs/day","5000 Rs/day","10000 Rs/day","12000 Rs/day","20000 Rs/day"];
var cab_name = ["Taxi for sure","Uber","Ola","Spot city taxi ","Meru cabs"];
var cab_fare = ["20 Rs/km","12 Rs/km","10 Rs/km","15 Rs/km","8 Rs/km"];

function available(keyword) {
	var flights = [1,2,3,4,5];
	var hotels = [1,2,3,4,5];
	var cabs = [1,2,3,4,5];

	var flight_name = ["IndiGo","JetAir","GoAir","Spicejet","AirIndia"];
	var flight_fare = ["3000 Rs", "4000 Rs", "4800 Rs", "5500 Rs", "2500 Rs"];
 	var hotel_name = ["Hotel Taj","The Leela Palace","The Taj Mahal","The Oberoi Grand","Umaid Bhawan Palace"];
 	var hotel_fare = ["2000 Rs/day","5000 Rs/day","10000 Rs/day","12000 Rs/day","20000 Rs/day"];
 	var cab_name = ["Taxi for sure","Uber","Ola","Spot city taxi ","Meru cabs"];
 	var cab_fare = ["20 Rs/km","12 Rs/km","10 Rs/km","15 Rs/km","8 Rs/km"];

	if(keyword === "flight"){
		display(flight_name, flight_fare, "roundedlist1",1);		
	}
	else if(keyword === "hotel"){
		display(hotel_name, hotel_fare, "roundedlist2",2);
	}
	else if(keyword === "cab"){
		display(cab_name, cab_fare, "roundedlist3",3);
	}
}

function display(name, fare, position, category) {
	document.getElementById(position).innerHTML = "";
	var li = "";
	for (var i = 0; i < 5; i++){
		li =  document.createElement('li');
		li.innerHTML = "<div class='fd"+index[i]+"'>"+name[i]+" and Fare: "+fare[i]+"</div>"
		document.getElementById(position).appendChild(li);
		li = "";
	}
}

var active = [];

function changeColour(choice,category) {

	if(category == 1){
		display(hotel_name, hotel_fare, "roundedlist2",2);
		var categ1 = document.getElementById('flight');
		for (var i = 0; i < index.length; i++) {
			var item = 

			document.getElementsByClassName('fd'+index[i]);
			item[0].className = item[0].className.replace('active', '');
		};
		var selectedItem = categ1.getElementsByClassName('fd'+choice);
		selectedItem[0].className = selectedItem[0].className +' active';
		active[0] = document.activeElement.value;
		//console.log(document.activeElement.value);
	}

	else if(category == 2){
		display(cab_name, cab_fare, "roundedlist3",3);
		var categ2 = document.getElementById('hotel');
		for (var i = 0; i < index.length; i++) {
			var item = categ2.getElementsByClassName('fd'+index[i]);
			item[0].className = item[0].className.replace('active', '');
		};
		var selectedItem = categ2.getElementsByClassName('fd'+choice);
		selectedItem[0].className = selectedItem[0].className +' active';
		active[1] = document.activeElement.value;
		//console.log(document.activeElement.value);
	}

	else if(category == 3) {
		var categ3 = document.getElementById('cab');
		for (var i = 0; i < index.length; i++) {
			var item = categ3.getElementsByClassName('fd'+index[i]);
			item[0].className = item[0].className.replace('active', '');
		};
		var selectedItem = categ3.getElementsByClassName('fd'+choice);
		selectedItem[0].className = selectedItem[0].className +' active';
		active[2] = document.activeElement.value; 
		//console.log(document.activeElement.value);
		active.toString();
		alert("You are selected " + active);
		console.log(active);
	}
}