"use strict";

console.log("Todo Js Loaded ");
console.log("--------------------------------------");

var toDoInput = document.getElementById("todo");
var toDoList = document.getElementById("todo-list");
var deleteButton = document.getElementById("delete");
var inputStatus = false;

/*Creates list item and adds a button set inside.*/

var createTodo = function (toDo) {
    var listItem = document.createElement("li");
    var deleteButton = document.createElement("button");
    var checkButton = document.createElement("button");
    var actionContainer = document.createElement("span");

    actionContainer.className = "action-container";
    actionContainer.appendChild(deleteButton);
    actionContainer.appendChild(checkButton);
    deleteButton.setAttribute("id", "delete");
    checkButton.setAttribute("id", "check");
    deleteButton.innerHTML = '<span class="material-icons delete">delete</span>';
    checkButton.innerHTML =
        '<span class="material-icons check">check_circle</span>';

    deleteButton.addEventListener("click", removeTodo);
    checkButton.addEventListener("click", addToDone);
    listItem.innerText = toDo;
    listItem.appendChild(actionContainer);

    return listItem;
};

/*Checks inputfield if its empty it shows alert*/
var addTodo = function () {
    if (toDoInput.value !== "") {
        var listItem = createTodo(toDoInput.value);
        toDoList.appendChild(listItem);

        toDoInput.value = "";
    } else {
        alert("Please fill TextField to add a Todo");
    }
};

/* Removes todos inside the list*/
var removeTodo = function (e) {
    var listItem = e.target.parentNode.parentNode.parentNode;
    var list = listItem.parentNode;
    list.removeChild(listItem);
};
/*Adds item to done list*/
var addToDone = function () {
    var doneList = document.getElementById("done-list");
    var item = this.parentNode.parentNode;
    console.log("ITS Done");
    doneList.appendChild(item);
    console.log(item);
};

/* Date and time Settings*/

var shortMonths = function () {
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov"
    ];
    return months[currentTime.getMonth()];
};

var dayName = function () {
    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return days[currentTime.getDay()];
};
var currentTime = new Date();
var day = document.getElementsByClassName("day");
var month = document.getElementsByClassName("month");
var year = document.getElementsByClassName("year");
var today = document.getElementsByClassName("today");

day[0].innerHTML = currentTime.getDate();
month[0].innerHTML = shortMonths();
year[0].innerHTML = currentTime.getFullYear();
today[0].innerHTML = dayName();

document.getElementById("todo").addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        addTodo();
    }
});
