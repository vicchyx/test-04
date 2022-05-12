// Date & Time Variables
var today = moment().format("dddd, Do MMM YYYY [at] h:mm:ss a");
$("#currentDay").text(today);

//Function to time display
setInterval(function() {
    $("#currentDay").text(moment().format("dddd, Do MMM YYYY [at] h:mm:ss a"));
}, 1000);
