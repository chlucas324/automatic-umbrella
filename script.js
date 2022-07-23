//date at the top 
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// tasks to store in local storage
var tasks = {
    "8": [],
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": [],
    "18": [],
};

//add tasks to local storage

// local tasks from local storage

// make sure time is correct

//create tasks- corresponding based on the hour
var createTask = function(taskText, hourDiv) {
    var taskDiv = hourDiv.find(".task");
    var taskP = $("<p>")
        .addClass("description")
        .text(taskText)
    taskDiv.html(taskP);
}

// update tasks based on time

var currentHour = moment().hour();
$(".task-info").each( function() {
    var whatHour = parseInt($(this).attr("id"));

//  past, present, and future
    if ( whatHour < currentHour ) {
        $(this).removeClass(["present", "future"]).addClass("past");
    }
    else if ( whatHour === currentHour ) {
        $(this).removeClass(["past", "future"]).addClass("present");
    }
    else {
        $(this).removeClass(["past", "present"]).addClass("future");
    }
})

// click handlers

// save button

// update task backgrounds at the top of the hour 

// get tasks from local storage upon loading
getTasks();