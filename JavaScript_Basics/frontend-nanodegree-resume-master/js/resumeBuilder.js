/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append(["Wei"]);

// var firstName = "james";

// var age = 32;

// console.log(firstName);

// var awesomeThoughts = "I am Wei and I am AWESOME!"

// console.log(awesomeThoughts);

// var email = "wei@udacity.com";

// var newEmail =
//     email.replace("udacity", "gmail");

// console.log(email);

// console.log(newEmail);

// var funThoughts =
//     awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append([funThoughts]);

var name = "Wei Wei";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Sofeware Development Enginee";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
