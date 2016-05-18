/*
This is empty on purpose! Your code to build the resume will go here.
 */

// resumee starts here

var name = "Christoph Koch"
var role = "Captain"
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name" : "Christoph",
    "role" : "Captain",
    "contactInfo" : {"mobile":"123-456-789",
                   "email":"test@example.com"
    },
    "bioPic" : "images/fry.jpg",
    "welcomeMessage" : "Hi there!",
    "skills" : ["reading", "riting", "rithmetik"]
};

var work = {};
var projects = {};
var education = {};

$("#main").append(bio.name);