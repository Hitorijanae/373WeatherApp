$(document).ready(function(){
	var weather = "";
	var temperature = 0;
	$("#weather_input").on("submit",function(){
		var city = $("#city").val();
		var state = $("#states").val();
		var requestData = city + ',' + state + ',US';
		$.ajax({
			url : 'https://api.openweathermap.org/data/2.5/weather',
			method : 'get',
			data : { q : requestData, units: 'imperial', appid: 'aae629f4f5dc123bed0b032e25f737cd'},
			dataType : 'json',
			success : function(response){
				weather = response.weather[0].main;
				temperature = response.main.temp;
				updateScreen(temperature,weather);
			}
		});
		return false;
	});
});

function updateScreen(t,w){
	if(t < 50){
		$('body').css('background-color','#87ceeb');
		alert(t);
	}
	else{
		$('body').css('background-color','#fd5e53');
		alert(t);
	}
	if(w=="Rain"){
		$("#current_weather").attr("src","assets/rainy.jpg");
		$("#weather").text("Raining");
		$("#temperature").text(t);
	}
	else if(w=="Clear"){
		$("#current_weather").attr("src","assets/sunny.jpg");
		$("#weather").text("Sunny");
		$("#temperature").text(t);
	}
	else if(w=="Tornado"){
		$("#current_weather").attr("src","assets/windy.jpg");
		$("#weather").text("Windy");
		$("#temperature").text(t);
	}
	else{
		$("#current_weather").attr("src","assets/clouds.jpg");
		$("#weather").text("Cloudy");
		$("#temperature").text(t);
	}
}