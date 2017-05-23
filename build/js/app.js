(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
function Time(alarm){
  this.alarm = alarm;
};
Time.prototype.alarmTime = function(){

};

exports.timeModule = Time;

},{}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/alarm.js":2}]},{},[3]);
