
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
	var flight_name = ["IndiGo","JetAir","GoAir","Spicejet","AirIndia"];
	var flight_fare = ["3000 Rs", "4000 Rs", "4800 Rs", "5500 Rs", "2500 Rs"];
	//var rand_flight = flight_name[Math.floor(Math.random() * flight_name.length)];
	//var rand_fare = flight_fare[Math.floor(Math.random() * flight_fare.length)];
	$('#fdetails').css('display','block');
	document.getElementById("fd1").innerHTML= flight_name[0]+" and Fare: "+flight_fare[0];
	document.getElementById("fd2").innerHTML= flight_name[1]+" and Fare: "+flight_fare[1];
	document.getElementById("fd3").innerHTML= flight_name[2]+" and Fare: "+flight_fare[2];
	document.getElementById("fd4").innerHTML= flight_name[3]+" and Fare: "+flight_fare[3];
	document.getElementById("fd5").innerHTML= flight_name[4]+" and Fare: "+flight_fare[4];
}

function hotel_available() {
 	var hotel_name = ["Hotel Taj","The Leela Palace","The Taj Mahal","The Oberoi Grand","Umaid Bhawan Palace"];
 	var hotel_fare = ["2000 Rs/day","5000 Rs/day","10000 Rs/day","12000 Rs/day","20000 Rs/day"];
 	$('#hdetails').css('display','block');
 	document.getElementById("hd1").innerHTML= hotel_name[0]+" and Fare: "+hotel_fare[0];
	document.getElementById("hd2").innerHTML= hotel_name[1]+" and Fare: "+hotel_fare[1];
	document.getElementById("hd3").innerHTML= hotel_name[2]+" and Fare: "+hotel_fare[2];
	document.getElementById("hd4").innerHTML= hotel_name[3]+" and Fare: "+hotel_fare[3];
	document.getElementById("hd5").innerHTML= hotel_name[4]+" and Fare: "+hotel_fare[4];
}

function cab_available() {
 	var cab_name = ["Taxi for sure","Uber","Ola","Spot city taxi ","Meru cabs","Mega cabs"];
 	var cab_fare = ["20 Rs/km","12 Rs/km","10 Rs/km","15 Rs/km","8 Rs/km","9 Rs/km"];
 	$('#cdetails').css('display','block');
 	document.getElementById("cd1").innerHTML= cab_name[0]+" and Fare: "+cab_fare[0];
	document.getElementById("cd2").innerHTML= cab_name[1]+" and Fare: "+cab_fare[1];
	document.getElementById("cd3").innerHTML= cab_name[2]+" and Fare: "+cab_fare[2];
	document.getElementById("cd4").innerHTML= cab_name[3]+" and Fare: "+cab_fare[3];
	document.getElementById("cd5").innerHTML= cab_name[4]+" and Fare: "+cab_fare[4];
}

function changeColour(element) {
	if (element.checked) {
    	document.getElementById("fd1").style.color = "green";

  	}  
  	else{

  	}
}

*$('#radio-button').on('change', function() {
   alert($('input[name="radioGroup"]:checked', '#radio-button').val()); 
   alert($(this).attr('class'));
}); 
