
$(document).ready(function(){
	$('#flight').hide();
	$('#hotel').hide();
	$('#cab').hide();
});

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
        	$('#flight').show();
			available("flight");
		}
		else if(input_text.indexOf('hotel') >= 0){
			$('#hotel').show();
			available("hotel");
		}
		else if(input_text.indexOf('cab') >= 0){
			$('#cab').show();
			available("cab");
		}
		$('#info').val('');

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
		$('#hotel').show();
		display(hotel_name, hotel_fare, "roundedlist2",2);
		active_fun("flight",choice);
		active[0] = $('input[name="radioGroup1"]:checked').val();
	}
	else if(category == 2){
		$('#cab').show();
		display(cab_name, cab_fare, "roundedlist3",3);
		active_fun("hotel",choice);
		active[1] = $('input[name="radioGroup2"]:checked').val();
	}
	else if(category == 3) {
		active_fun("cab",choice);
		active[2] = $('input[name="radioGroup3"]:checked').val();
		active.toString();
		alert("You are selected " + active);
	}
}

function active_fun(name,c) {
	for (var i = 0; i < index.length; i++) {
		$('#'+name+' fd'+(i+1)).removeClass('active');
		var item = $('#'+name).find('.fd'+index[i]);
		$(item[0]).removeClass('active');
	}
	var selectedItem = $('#'+name).find('.fd'+c);
	$(selectedItem[0]).addClass('active');
}