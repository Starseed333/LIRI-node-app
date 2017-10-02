console.log ("inside js");


//Twitter Keys
var keys = require("./keys.js");
var twitterKeys = keys.twitterKeys;

//Command Line Argument
var nodeArgs = process.argv;
//Liri Argument 
var liriCommand = process.argv[2];

//Node Require Packages
var twitter = require("twitter");
var spotify = require("spotify");
var request = require("request");
var fs = require("fs");


//The parameter to the Liri Command (logic from geocode.js)
//Include spaces
var liriArg = "";
for (var i = 3; <nodeArgs.length; i++) {
	liriArg += nodeArgs[i] + " ";
}

//retrieve OMDB Information
function retrieveOMDB (movie){


	//(logic to append the file bankcal.js)

	//Liri default to Mr.Nobody
	var search;
	if(movie === ""){
		search = "Mr. Nobody";
	} else{
		search = movie;
	}

	search = search.split("").join("+");

	//Query String. (logic from omdbRequest.js)
	var queryURL = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=40e9cece";


	//Request to OMDB
	request(queryURL, function (error, response, body){
		if (error || (response.statusCode !==200) ) {
			var movieObject = JSON.parse(body);
			
			} else {

			}

			
		
	














}