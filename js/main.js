var chalmersId = "9021014001960000";
var kapellplatsenId = "9021014003760000";
var chalmersTvargataId = "9021014001970000";
var chalmersplatsenId = "9021014001961000";

var monthObj = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
var dayObj = ["Söndag", "Måndag", "Tisdag", "Untzdag", "Torsdag", "Fredag", "Lördag"];

var newDate = new Date();

function getStops() {
	var baseUrl = "https://api.fam-ericsson.se/vasttrafik/?id=";

	$.getJSON(baseUrl + chalmersId, function(data) {
		var api = data;

		if (api.trafik != null) {
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

					$("#chalmersTable").append("<tr><td style='width: 55px; border-radius: 3px; padding: 5px; text-align: center; background-color: " + linjeinfo.bgFarg + "; color: " + linjeinfo.fgFarg + ";'>" + linjeinfo.linje + "</td><td> " + avgang.resmal + " </td><td class='lage'>" + avgang.lage[0] + "</td><td class='tid'>" + nasta + "</td><td class='tid'>" + darefter + "</td>");
				});
			});
		} else {
			$("#chalmersTable").html("<tr><td style='width: 55px; border-radius: 3px; padding: 5px; text-align: center; background-color: #F44336; color: #FFFFFF'><span class='fa fa-hourglass'></span></td><td> Inga avgångar</td><td class='lage'>-</td><td class='tid'>60+</td><td class='tid'>-</td>");
		}
	});

	$.getJSON(baseUrl + kapellplatsenId, function(data) {
		var api = data;

		if (api.trafik != null) {
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

					$("#kapellplatsenTable").append("<tr><td style='width: 55px; border-radius: 3px; padding: 5px; text-align: center; background-color: " + linjeinfo.bgFarg + "; color: " + linjeinfo.fgFarg + ";'>" + linjeinfo.linje + "</td><td> " + avgang.resmal + " </td><td class='lage'>" + avgang.lage[0] + "</td><td class='tid'>" + nasta + "</td><td class='tid'>" + darefter + "</td>");
				});
			});
		} else {
			$("#kapellplatsenTable").html("<tr><td style='width: 55px; border-radius: 3px; padding: 5px; text-align: center; background-color: #F44336; color: #FFFFFF'><span class='fa fa-hourglass'></span></td><td> Inga avgångar</td><td class='lage'>-</td><td class='tid'>60+</td><td class='tid'>-</td>");
		}
	});

	$.getJSON(baseUrl + chalmersTvargataId, function(data) {
		var api = data;

		if (api.trafik != null) {
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

					$("#chalmersTvargataTable").append("<tr><td style='width: 55px; border-radius: 3px; padding: 5px; text-align: center; background-color: " + linjeinfo.bgFarg + "; color: " + linjeinfo.fgFarg + ";'>" + linjeinfo.linje + "</td><td> " + avgang.resmal + " </td><td class='lage'>" + avgang.lage[0] + "</td><td class='tid'>" + nasta + "</td><td class='tid'>" + darefter + "</td>");
				});
			});
		} else {
			$("#chalmersTvargataTable").html("<tr><td style='width: 55px; border-radius: 3px; padding: 5px; text-align: center; background-color: #F44336; color: #FFFFFF'><span class='fa fa-hourglass'></span></td><td> Inga avgångar</td><td class='lage'>-</td><td class='tid'>60+</td><td class='tid'>-</td>");
		}
	});

	$.getJSON(baseUrl + chalmersplatsenId, function(data) {
		var api = data;

		if (api.trafik != null) {
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

					$("#chalmersplatsenTable").append("<tr><td style='width: 55px; border-radius: 3px; padding: 5px; text-align: center; background-color: " + linjeinfo.bgFarg + "; color: " + linjeinfo.fgFarg + ";'>" + linjeinfo.linje + "</td><td> " + avgang.resmal + " </td><td class='lage'>" + avgang.lage[0] + "</td><td class='tid'>" + nasta + "</td><td class='tid'>" + darefter + "</td>");
				});
			});
		} else {
			$("#chalmersplatsenTable").html("<tr><td style='width: 55px; border-radius: 3px; padding: 5px; text-align: center; background-color: #F44336; color: #FFFFFF'><span class='fa fa-hourglass'></span></td><td> Inga avgångar</td><td class='lage'>-</td><td class='tid'>60+</td><td class='tid'>-</td>");
		}
	});
}

function getFood() {
	var matsedel_dagar = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
	$.getJSON("https://api.fam-ericsson.se/matsedel/beta/", function(data) {
		$("#matsedel_dagar").html("");
		var date = new Date();
		var day = date.getDay();
		if (matsedel_dagar[day] == "Lördag" || matsedel_dagar[day] == "Söndag") {
			$("#matsedel_dagar").html("<h3>" + matsedel_dagar[day] + "</h3><p>Ingen mat idag</p>");
		} else {
			$.each(data.food, function(curr, food) {
				if (food.day == matsedel_dagar[day]) {
					$("#matsedel_dagar").append("<h3>" + food.day + "</h3><p>" + food.reg + "</p><strong>Vegetariskt</strong><p>" + food.veg + "</p>");
					if (matsedel_dagar[day] != "Fredag") {
						$("#matsedel_dagar").append("<hr>");
					}
				} else if (food.day == matsedel_dagar[day + 1] && matsedel_dagar[day + 1] != "Lördag") {
					$("#matsedel_dagar").append("<h3>" + food.day + "</h3><p>" + food.reg + "</p><strong>Vegetariskt</strong><p>" + food.veg + "</p>");
				}
			});
		}
	});
}

function timeDiff(fromUnix, toUnix) {
	return Math.abs(Math.floor(fromUnix - toUnix));
}

function dateDiff(fromDate, toDate, interval) {
	/*
	 * DateFormat month/day/year hh:mm:ss
	 * ex.
	 * datediff("01/01/2011 12:00:00", "01/01/2011 13:30:00", "seconds");
	 */
	var second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7;
	fromDate = new Date(fromDate);
	toDate = new Date(toDate);
	var timediff = toDate - fromDate;
	if (isNaN(timediff)) {
		return NaN
	};
	switch (interval) {
		case "years": return toDate.getFullYear() - fromDate.getFullYear();
		case "months": return (
			( toDate.getFullYear() * 12 + toDate.getMonth() )
			-
			( fromDate.getFullYear() * 12 + fromDate.getMonth() )
		);
		case "weeks"  : return Math.floor(timediff / week);
		case "days"   : return Math.floor(timediff / day);
		case "hours"  : return Math.floor(timediff / hour);
		case "minutes": return Math.abs(Math.floor(timediff / minute));
		case "seconds": return Math.floor(timediff / second);
		default: return undefined;
	}
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
	}
	if(minutes < 10) {
		minutes = "0" + minutes;
	}
	if(hours < 10) {
		hours = "0" + hours;
	}
	if(date < 10) {
		date = "0" + date;
	}
	if(month < 10) {
		month = "0" + month;
	}

	$("#datetime #clock").html("<h2>" + hours + ":" + minutes + ":" + seconds + "</h2>");

	var today = "<h2>" + dayObj[now.getDay()] + " " + date + " " + monthObj[month - 1] + "<br>Vecka " + getWeek() + "</h2>";
	$("#datetime #date").html(today);

	if(seconds == 0 || seconds == 30) {
        getStops();
		chalmersCam();
	}

	if (minutes == 59) {
		getFood();
	}
}

function chalmersCam() {
	$("#chalmers_cam").attr("src", "https://api.fam-ericsson.se/gbgcamera/?camera=17&v=" + Date.now()).on("error", function(err) {
		$(this).attr("src", "img/error.png");
		chalmers_cam();
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

$(document).ready(function() {
	$("#hideApps").click(function() {
		$("#itgappen").slideToggle(200, function() {
			if ($("#itgappen").css("display") == "none") {
				$("#logo_container").animate({
					width: "150px",
					marginBottom: "0px"
				}, 200);
			} else {
				$("#logo_container").animate({
					width: "100px",
					marginBottom: "100px"
				}, 200);
			}
		});
	});
});

chalmersCam();
getStops();
getFood();
clock();

setInterval(clock,1000);
