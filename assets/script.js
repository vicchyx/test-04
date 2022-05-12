// Date & Time
var today = moment().format("dddd, Do MMM YYYY [at] h:mm:ss a");
$("#currentDay").text(today);

// Function to make the clock show the time in real time
setInterval(function() {
        $("#currentDay").text(moment().format("dddd, Do MMM YYYY [at] h:mm:ss a"));
    }, 1000);

// Function for the text boxes
function pastPresentOrFuture() {
    var timeBlock = $(".time-block");
    var currentTime = moment().hour();


    timeBlock.each(function() {
  
        // Variables for hourblocks
        var hourBlock = parseInt($(this).attr("id").split("hour-")[1]);

        if (hourBlock < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");

            console.log("< hour/time " + hourBlock, currentTime);

        } else if (hourBlock === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        
            console.log("= hour/time " + hourBlock, currentTime);

        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");

            console.log("> hour/time " + hourBlock, currentTime);
        }
    });
}


// Variable to save the data
var saveButton = $(".saveBtn");
saveButton.on("click", saveToLocalStorage);

// Variable to make the clear button clear the data
var clearButton = $(".clearBtn");
clearButton.on("click", clearScheduledPlan);

//Function to save to LS
function saveToLocalStorage() {
    var hour = $(this).parent().attr("id");
    var plans = $(this).siblings(".description").val();
    localStorage.setItem(hour, plans);
}

function retrieveFromLocalStorage() {
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
}

//Function to clear the input data from LS
function clearScheduledPlan() {
    var thisHour = $(this).parent().attr("id");
    localStorage.removeItem(thisHour);
    retrieveFromLocalStorage();
}

function init() {
    retrieveFromLocalStorage();
    pastPresentOrFuture();
}

init();