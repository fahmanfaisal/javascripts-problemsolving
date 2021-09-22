// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
//current year is : 2021

var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");

  var time = today.toLocaleTimeString();
  console.log("current time is : " + time); 

  var year = today.getFullYear();
  console.log("Current year is : " + year);

  console.log('-----------------------------------');
