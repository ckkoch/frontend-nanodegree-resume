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