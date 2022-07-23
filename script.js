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