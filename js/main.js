var chalmersId = "9021014001960000";
var kapellplatsenId = "9021014003760000";
var chalmersTvargataId = "9021014001970000";
var chalmersplatsenId = "9021014001961000";

var monthObj = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
var dayObj = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

var newDate = new Date();
var pageOpenedAt = new Date().getTime();

function getStops() {
	//var baseUrl = "http://api.itgonline.se/vasttrafik/?id=";
	var baseUrl = "https://api.fam-ericsson.se/vasttrafik/?id=";

	$("#chalmersTable").vasttrafik({
        url: baseUrl,
        stopId: chalmersId,
        departureNow: "nu",
        departureNone: "Inga avgångar"
    });

	$("#kapellplatsenTable").vasttrafik({
        url: baseUrl,
        stopId: kapellplatsenId,
        departureNow: "nu",
        departureNone: "Inga avgångar"
    });

	$("#chalmersTvargataTable").vasttrafik({
        url: baseUrl,
        stopId: chalmersTvargataId,
        departureNow: "nu",
        departureNone: "Inga avgångar"
    });

	$("#chalmersplatsenTable").vasttrafik({
        url: baseUrl,
        stopId: chalmersplatsenId,
        departureNow: "nu",
        departureNone: "Inga avgångar"
    });
}

function getFood() {
	var matsedel_dagar = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
	$.getJSON("https://api.fam-ericsson.se/matsedel/", function(data) {
		$("#matsedel_dagar").html("");
		var date = new Date();
		var day = date.getDay();
		if (matsedel_dagar[day] == "Lördag" || matsedel_dagar[day] == "Söndag") {
			$("#matsedel_dagar").html("<h3>" + matsedel_dagar[day] + "</h3><p style='color: #F44336'>Ingen mat idag</p>");
		} else {
			$.each(data.food, function(curr, food) {
				if (food.day == matsedel_dagar[day]) {
					if (food.open) {
						$("#matsedel_dagar").append("<h3>" + food.day + "</h3><p>" + food.reg + "</p><strong>Vegetariskt</strong><p>" + food.veg + "</p>");

						if (matsedel_dagar[day] != "Fredag") {
							$("#matsedel_dagar").append("<hr>");
						}
					} else {
						$("#matsedel_dagar").append("<h3>" + food.day + "</h3><p style='color: #F44336'>" + food.reason + "</p>");
					}
				} else if (food.day == matsedel_dagar[day + 1] && matsedel_dagar[day + 1] != "Lördag") {
					if (food.open) {
						$("#matsedel_dagar").append("<h3>" + food.day + "</h3><p>" + food.reg + "</p><strong>Vegetariskt</strong><p>" + food.veg + "</p>");
					} else {
						$("#matsedel_dagar").append("<h3>" + food.day + "</h3><p style='color: #F44336'>" + food.reason + "</p>");
					}
				}
			});
		}
	});
}

function getGitHub(loadedDate) {
	$.getJSON("https://api.github.com/repos/itggot-joel-eriksson/ITG-Infoskarm", function (data) {
	    var updatedDate = data.updated_at;
		if (updatedDate > loadedDate) {
			location.reload();
		}
	});
}

function timeDiff(fromUnix, toUnix) {
	if (isNaN(fromUnix) || isNaN(toUnix)) {
		return NaN;
	}
	return Math.abs(Math.floor(fromUnix - toUnix));
}

function clock() {    
	$("#datetime #clock").html("<h2>" + moment().locale("sv").format("HH:mm:ss") + "</h2>");
	$("#datetime #date").html("<h2>" + moment().locale("sv").format("dddd D MMMM") + "<br />Vecka " + moment().locale("sv").format("W") + "</h2>");

	if(moment().locale("sv").format("ss") === "00" || moment().locale("sv").format("ss") === "10" || moment().locale("sv").format("ss") === "20" || moment().locale("sv").format("ss") === "30" || moment().locale("sv").format("ss") === "40" || moment().locale("sv").format("ss") === "50") {
        getStops();
		chalmersCam();
	}

	if (moment().locale("sv").format("mm:ss") === "00:00" || moment().locale("sv").format("mm:ss") === "30:00") {
		getFood();
		getGitHub(pageOpenedAt);
	}

	if (moment().locale("sv").format("HH:mm:ss") === "00:00:00") {
		location.reload();
	}
}

function chalmersCam() {
	$("#chalmers_cam").attr("src", "https://api.fam-ericsson.se/gbgcamera/?camera=17&v=" + Date.now()).on("error", function() {
		$(this).attr("src", "img/error.png");
	});
}

var mousemove = 5000;
setInterval(function(evt) {
	mousemove -= 500;
	if (mousemove === 0) {
		$("html *").addClass("mousehide");
	}
}, 500);

$(document).on("mousemove", function(evt) {
	mousemove = 5000;
	$("html *").removeClass("mousehide");
});

clock();
getStops();
chalmersCam();
getFood();
getGitHub(pageOpenedAt);

var clockInterval = setInterval(clock,1000);
