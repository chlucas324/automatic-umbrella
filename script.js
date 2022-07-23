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

//create tasks- corresponding based on the hour
var createTask = function(taskText, hourDiv) {
    var taskDiv = hourDiv.find(".task");
    var taskP = $("<p>")
        .addClass("description")
        .text(taskText)
    taskDiv.html(taskP);
}

// get tasks from local storage upon loading
getTasks();