
var index = [1,2,3,4,5];
var flight_name = ["IndiGo","JetAir","GoAir","Spicejet","AirIndia"];
var flight_fare = ["3000 Rs", "4000 Rs", "4800 Rs", "5500 Rs", "2500 Rs"];
var hotel_name = ["Hotel Taj","The Leela Palace","The Taj Mahal","The Oberoi Grand","Umaid Bhawan Palace"];
var hotel_fare = ["2000 Rs/day","5000 Rs/day","10000 Rs/day","12000 Rs/day","20000 Rs/day"];
var cab_name = ["Taxi for sure","Uber","Ola","Spot city taxi ","Meru cabs"];
var cab_fare = ["20 Rs/km","12 Rs/km","10 Rs/km","15 Rs/km","8 Rs/km"];

$(document).ready(function(){
    $("#enter_button").click(function(){
        var input_text = $('#info').val();
        if(input_text.indexOf('flight') >= 0){
			available("flight");
		}
		else if(input_text.indexOf('hotel') >= 0){
			available("hotel");
		}
		else if(input_text.indexOf('cab') >= 0){
			available("cab");
		}
		$('#info').empty();  
    });
});

function available(keyword) {
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
	$('#'+position).empty();
	for (var i = 0; i < 5; i++){
		$('#'+position).append("<div class='fd"+index[i]+"'>"+name[i]+" and Fare: "+fare[i]+"</div>");
	}
}

var active = [];

function changeColour(choice,category) {
	if(category == 1){
		display(hotel_name, hotel_fare, "roundedlist2",2);
		active_fun("flight",choice);
		active[0] = document.activeElement.value;
	}
	else if(category == 2){
		display(cab_name, cab_fare, "roundedlist3",3);
		active_fun("hotel",choice);
		active[1] = document.activeElement.value;
	}
	else if(category == 3) {
		active_fun("cab",choice);
		active[2] = document.activeElement.value; 
		active.toString();
		alert("You are selected " + active);
	}
}

function active_fun(name,c) {
	var element = document.getElementById(name);
	for (var i = 0; i < index.length; i++) {
		$('#'+name+' fd'+(i+1)).removeClass('active');
		var item = element.getElementsByClassName('fd'+index[i]);
		item[0].className = item[0].className.replace('active', '');
	}
	var selectedItem = element.getElementsByClassName('fd'+c);
	selectedItem[0].className = selectedItem[0].className +' active';
}
