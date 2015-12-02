document.addEventListener("DOMContentLoaded", function() {
	chrome.management.getAll(getAllCallback);
});

var getAllCallback = function(list) {
	// TODO: Something Awesome
};

function get_time() {
	var d = new Date();
	hours = d.getHours() < 13 ? d.getHours() : d.getHours() - 12;
	hours = hours < 10 ? "0" + hours : hours;
	minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
	seconds = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
	var time = hours + "  " + minutes + "  " + seconds;
	return time;
};

function get_date() {
	var d = new Date();
	days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	day = days[d.getDay()];
	months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	month = months[d.getMonth()];
	return day + ", " + month + " " + d.getDate();
};

window.onload = function() {
	document.getElementById("time").innerHTML = get_time();
	document.getElementById("date").innerHTML = get_date();
	setInterval (function() {
		document.getElementById ('time').firstChild.data = get_time();
	}, 1000);
}
