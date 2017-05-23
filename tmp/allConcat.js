var Entry = require('./../js/alarm.js').entryModule;

$(document).ready(function(){
  setInterval(function clock(){
    $('#time').text(moment().format('hh:mm:ss a'));
    return clock;
    console.log(clock);
  }(), 1000);

  $('#alarm_set').submit(function(){
    event.preventDefault();
    var alarm_set = $('#alarm_set').val();
    console.log(alarm_set);
    var alarmDisplay = new Time(alarmSet);
    alarmDisplay.alarmTime();
    $('#alarm_output').text("set the time" + alarmSet + "time to wake up");
  });
});

var apiKey = require('./../.env').apiKey;
var apiKey = "990bbc0dfef73ea05ad6034184f72ec5";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      console.log(response['main']['temp']);
      $('#text').text(response['main']['temp']);
    });
  });
});
