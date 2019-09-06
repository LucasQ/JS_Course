var d = new Date();
var e = new Date(2018, 11, 24, 10, 33, 30, 0);

document.getElementById("demo").innerHTML = d.toUTCString();
document.getElementById("demo").innerHTML = d.toDateString();

var f = new Date("2015/03/25");

var msec = Date.parse("March 21, 2012");

var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("demo").innerHTML = months[d.getMonth()];