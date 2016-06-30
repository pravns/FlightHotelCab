var app = angular.module("app",[]);
app.controller("appcontroller",function($scope){
	$scope.flight = ["IndiGo & Fare:2000 Rs","JetAir & Fare:3000 Rs","GoAir &  Fare:4000 Rs","Spicejet & Fare:5000 Rs","AirIndia & Fare:3500 Rs"];
	$scope.hotel = ["Hotel Taj & Fare:2000 Rs/day","The Leela Palace & Fare:5000 Rs/day","The Taj Mahal & Fare:8000 Rs/day","The Oberoi Grand & Fare:12000 Rs/day","Umaid Bhawan Palace & Fare:15000 Rs/day"];
	$scope.cab = ["Taxi for sure & Fare:20 Rs/km","Uber & Fare:13 Rs/km","Ola & Fare:15 Rs/km","Spot city taxi & Fare:17 Rs/km","Meru cabs & Fare:9 Rs/km"];
	
	$scope.find_text = function(){
		if($scope.info.indexOf('flight')>=0){
			$scope.flightshow = true;
		}
		else if($scope.info.indexOf('hotel')>=0){
			$scope.hotelshow = true;
		}
		else if($scope.info.indexOf('cab')>=0){
			$scope.cabshow = true;
		}
		$scope.info = "";
	};
	$scope.selected_option = {
		"color" : "green",
		"font-size" : "20px" 
	};
	$scope.option = {
		"color" : "black",
		"font-size" : "17px",
		"background-color" : "#ccc"
	};
});