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
