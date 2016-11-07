document.addEventListener("DOMContentLoaded", function() {
	chrome.management.getAll(getAllCallback);
});

var getAllCallback = function(list) {
	// TODO: Something Awesome
};

var expanded = false;

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

function toggle_page() {
	console.log("scrolling");
	if (expanded) {
		$("#dog-name").animate({top: "80%"});
		$("#time").fadeIn(600);
		$("#date").fadeIn(600);
		$(".search").fadeIn(600);
		setTimeout(function() {
			$("#name-btn").html("Learn more...");
		}, 100);
		$("#article").fadeOut(100);
	} else {
		$("#time").fadeOut(300);
		$("#date").fadeOut(300);
		$(".search").fadeOut(300);
		$("#dog-name").animate({top: "10%"});
		setTimeout(function() {
			$("#name-btn").html("Click to close");
		}, 100);
		setTimeout(function() {
			get_dog_details("Belgian Malinois");
		}, 300);
	}
	expanded = !expanded;
};

function get_dog_details(dog_name) {
	var summary_file = dog_name
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", summary_file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var article = rawFile.responseText;
                $("#article").html(article);

            }
        }
    }
    rawFile.send(null);
	$("#article").fadeIn(500);
	console.log(dog_name);
}

window.onload = function() {
	document.getElementById("time").innerHTML = get_time();
	document.getElementById("date").innerHTML = get_date();
	setInterval (function() {
		document.getElementById ('time').firstChild.data = get_time();
	}, 1000);
	document.getElementById("dog-name").onclick = function() { toggle_page() };
};
