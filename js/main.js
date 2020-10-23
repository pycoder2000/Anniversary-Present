var timestamp = Date.parse(new Date());
var time = timestamp / 1000 - 1358006408;

function timedCount() {
    document.getElementById('time').innerHTML = fmoney(time, 0);
    time = time + 1;
    t = setTimeout("timedCount()", 1000);
}

function fmoney(s, n) {
    n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var l = s.split(".")[0].split("").reverse(),
        r = s.split(".")[1];
    t = "";
    for (i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") /*+ "." + r*/ ;
}

function getDaysInMonth(month) {
    var data = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return data[month];
}

function timeElapse(date) {
    var current = Date();
    var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);
    var hours = Math.floor(seconds / 3600);
    if (hours < 10) {
        hours = "0" + hours;
    }
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    seconds = seconds % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var result = "<span class=\"digit\">" + days + "</span> days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + seconds + "</span> seconds";
    $("#elapseClock").html(result);
}