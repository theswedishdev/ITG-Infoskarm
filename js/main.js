var chalmersId = "9021014001960000";
var kapellplatsenId = "9021014003760000";
var chalmersTvargataId = "9021014001970000";
var chalmersplatsenId = "9021014001961000";

var monthObj = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
var dayObj = ["Söndag", "Måndag", "Tisdag", "Untzdag", "Torsdag", "Fredag", "Lördag"];

var newDate = new Date();
var pageOpenedAt = new Date().getTime();

function getStops() {
	var baseUrl = "https://api.fam-ericsson.se/vasttrafik/?id=";

	$.getJSON(baseUrl + chalmersId, function(data) {
		var api = data;

		if (api.trafik !== null) {
			var serverTime = api.serverDateTime.unixTimestamp;

			$("#chalmersTable").html("");

			$.each(api.trafik, function(currentFirst, linjeinfo) {
				$.each(linjeinfo.avgang, function(currentSecond, avgang) {

					var nasta = timeDiff(avgang.unixTimestamp[0], serverTime) / 60;
					var darefter = timeDiff(avgang.unixTimestamp[1], serverTime) / 60;

					if (isNaN(darefter)) {
						darefter = "-";
					}
					if (nasta <= 0) {
						nasta = "nu";
					}
					if (darefter <= 0) {
						darefter = "nu";
					}
					if (linjeinfo.linje == 55 && linjeinfo.trafiktyp == "buss") {
						linjeinfo.bgFarg = "#EAF5CC";
						linjeinfo.fgFarg = "#3AB73D";
					}

					$("#chalmersTable").append("<tr><td class='linje' style='background-color: " + linjeinfo.bgFarg + "; color: " + linjeinfo.fgFarg + ";'>" + linjeinfo.linje + "</td><td> " + avgang.resmal + " </td><td class='lage'>" + avgang.lage[0] + "</td><td class='tid'>" + nasta + "</td><td class='tid'>" + darefter + "</td>");
				});
			});
		} else {
			$("#chalmersTable").html("<tr><td class='linje' style='background-color: #F44336; color: #FFFFFF'><span class='fa fa-hourglass'></span></td><td> Inga avgångar</td><td class='lage'>-</td><td class='tid'>60+</td><td class='tid'>-</td>");
		}
	});

	$.getJSON(baseUrl + kapellplatsenId, function(data) {
		var api = data;

		if (api.trafik !== null) {
			var serverTime = api.serverDateTime.unixTimestamp;

			$("#kapellplatsenTable").html("");

			$.each(api.trafik, function(currentFirst, linjeinfo) {
				$.each(linjeinfo.avgang, function(currentSecond, avgang) {

					var nasta = timeDiff(avgang.unixTimestamp[0], serverTime) / 60;
					var darefter = timeDiff(avgang.unixTimestamp[1], serverTime) / 60;

					if (isNaN(darefter)) {
						darefter = "-";
					}
					if (nasta <= 0) {
						nasta = "nu";
					}
					if (darefter <= 0) {
						darefter = "nu";
					}
					if (linjeinfo.linje == 55 && linjeinfo.trafiktyp == "buss") {
						linjeinfo.bgFarg = "#EAF5CC";
						linjeinfo.fgFarg = "#3AB73D";
					}

					$("#kapellplatsenTable").append("<tr><td class='linje' style='background-color: " + linjeinfo.bgFarg + "; color: " + linjeinfo.fgFarg + ";'>" + linjeinfo.linje + "</td><td> " + avgang.resmal + " </td><td class='lage'>" + avgang.lage[0] + "</td><td class='tid'>" + nasta + "</td><td class='tid'>" + darefter + "</td>");
				});
			});
		} else {
			$("#kapellplatsenTable").html("<tr><td class='linje' style='background-color: #F44336; color: #FFFFFF'><span class='fa fa-hourglass'></span></td><td> Inga avgångar</td><td class='lage'>-</td><td class='tid'>60+</td><td class='tid'>-</td>");
		}
	});

	$.getJSON(baseUrl + chalmersTvargataId, function(data) {
		var api = data;

		if (api.trafik !== null) {
			var serverTime = api.serverDateTime.unixTimestamp;

			$("#chalmersTvargataTable").html("");

			$.each(api.trafik, function(currentFirst, linjeinfo) {
				$.each(linjeinfo.avgang, function(currentSecond, avgang) {

					var nasta = timeDiff(avgang.unixTimestamp[0], serverTime) / 60;
					var darefter = timeDiff(avgang.unixTimestamp[1], serverTime) / 60;

					if (isNaN(darefter)) {
						darefter = "-";
					}
					if (nasta <= 0) {
						nasta = "nu";
					}
					if (darefter <= 0) {
						darefter = "nu";
					}
					if (linjeinfo.linje == 55 && linjeinfo.trafiktyp == "buss") {
						linjeinfo.bgFarg = "#EAF5CC";
						linjeinfo.fgFarg = "#3AB73D";
					}

					$("#chalmersTvargataTable").append("<tr><td class='linje' style='background-color: " + linjeinfo.bgFarg + "; color: " + linjeinfo.fgFarg + ";'>" + linjeinfo.linje + "</td><td> " + avgang.resmal + " </td><td class='lage'>" + avgang.lage[0] + "</td><td class='tid'>" + nasta + "</td><td class='tid'>" + darefter + "</td>");
				});
			});
		} else {
			$("#chalmersTvargataTable").html("<tr><td class='linje' style='background-color: #F44336; color: #FFFFFF'><span class='fa fa-hourglass'></span></td><td> Inga avgångar</td><td class='lage'>-</td><td class='tid'>60+</td><td class='tid'>-</td>");
		}
	});

	$.getJSON(baseUrl + chalmersplatsenId, function(data) {
		var api = data;

		if (api.trafik !== null) {
			var serverTime = api.serverDateTime.unixTimestamp;

			$("#chalmersplatsenTable").html("");

			$.each(api.trafik, function(currentFirst, linjeinfo) {
				$.each(linjeinfo.avgang, function(currentSecond, avgang) {

					var nasta = timeDiff(avgang.unixTimestamp[0], serverTime) / 60;
					var darefter = timeDiff(avgang.unixTimestamp[1], serverTime) / 60;

					if (isNaN(darefter)) {
						darefter = "-";
					}
					if (nasta <= 0) {
						nasta = "nu";
					}
					if (darefter <= 0) {
						darefter = "nu";
					}
					if (linjeinfo.linje == 55 && linjeinfo.trafiktyp == "buss") {
						linjeinfo.bgFarg = "#EAF5CC";
						linjeinfo.fgFarg = "#3AB73D";
					}

					$("#chalmersplatsenTable").append("<tr><td class='linje' style='background-color: " + linjeinfo.bgFarg + "; color: " + linjeinfo.fgFarg + ";'>" + linjeinfo.linje + "</td><td> " + avgang.resmal + " </td><td class='lage'>" + avgang.lage[0] + "</td><td class='tid'>" + nasta + "</td><td class='tid'>" + darefter + "</td>");
				});
			});
		} else {
			$("#chalmersplatsenTable").html("<tr><td class='linje' style='background-color: #F44336; color: #FFFFFF'><span class='fa fa-hourglass'></span></td><td> Inga avgångar</td><td class='lage'>-</td><td class='tid'>60+</td><td class='tid'>-</td>");
		}
	});
}

function getFood() {
	var matsedel_dagar = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
	$.getJSON("https://api.fam-ericsson.se/matsedel/", function(data) {
		$("#matsedel_dagar").html("");
		var date = new Date();
		var day = date.getDay();
		if (matsedel_dagar[day] == "Lördag" || matsedel_dagar[day] == "Söndag") {
			$("#matsedel_dagar").html("<h3>" + matsedel_dagar[day] + "</h3><p>Ingen mat idag</p>");
		} else {
			$.each(data.food, function(curr, food) {
				if (food.day == matsedel_dagar[day]) {
					if (food.day == "Onsdag") {
						food.day = "Untzdag";
					}

					if (food.reg == food.veg) {
						$("#matsedel_dagar").append("<h3>" + food.day + "</h3><p>" + food.reg + "</p>");
					} else {
						$("#matsedel_dagar").append("<h3>" + food.day + "</h3><p>" + food.reg + "</p><strong>Vegetariskt</strong><p>" + food.veg + "</p>");
					}

					if (matsedel_dagar[day] != "Fredag") {
						$("#matsedel_dagar").append("<hr>");
					}
				} else if (food.day == matsedel_dagar[day + 1] && matsedel_dagar[day + 1] != "Lördag") {
					if (food.day == "Onsdag") {
						food.day = "Untzdag";
					}
					if (food.reg == food.veg) {
						$("#matsedel_dagar").append("<h3>" + food.day + "</h3><p>" + food.reg + "</p>");
					} else {
						$("#matsedel_dagar").append("<h3>" + food.day + "</h3><p>" + food.reg + "</p><strong>Vegetariskt</strong><p>" + food.veg + "</p>");
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
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var date = now.getDate();

	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();

	if(seconds < 10) {
		seconds = "0" + seconds;
	} else {
		seconds = seconds.toString();
	}
	if(minutes < 10) {
		minutes = "0" + minutes;
	} else {
		minutes = minutes.toString();
	}
	if(hours < 10) {
		hours = "0" + hours;
	} else {
		hours = hours.toString();
	}

	$("#datetime #clock").html("<h2>" + hours + ":" + minutes + ":" + seconds + "</h2>");

	var today = "<h2>" + dayObj[now.getDay()] + " " + date + " " + monthObj[month - 1] + "<br>Vecka " + getWeek() + "</h2>";
	$("#datetime #date").html(today);

	if(seconds == "00" || seconds == "30") {
        getStops();
		chalmersCam();
	}

	if (minutes == "00" && seconds == "00" || minutes == "30" && seconds == "00") {
		getFood();
		getGitHub(pageOpenedAt);
	}

	if (hours == "00" && minutes == "00" && seconds == "00") {
		location.reload();
	}
}

function chalmersCam() {
	$("#chalmers_cam").attr("src", "https://api.fam-ericsson.se/gbgcamera/?camera=17&v=" + Date.now()).on("error", function() {
		$(this).attr("src", "img/error.png");
		chalmersCam();
	});
}

function getWeek() {
	date = new Date();
	weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
	weekday = weekdays[date.getDay()];
	date.setHours(0,0,0);
	date.setDate(date.getDate() + 4 - (date.getDay()||7));
	yearStart = new Date(date.getFullYear(),0,1);
	weekNo = Math.ceil(( ( (date - yearStart) / 86400000) + 1)/7);
	return weekNo;
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
