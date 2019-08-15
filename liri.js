require("dotenv").config();
const keys = require("./keys.js");
const axios = require("axios");
const Spotify = require("node-spotify-api")
const spotify = new Spotify(keys.spotify);


const fs = require("fs");


switch(process.argv[2]){

    case "spotify-this-song":
        spotifyThis(process.argv[3]);
        break;
    case "movie-this":
        //run movie api function
        break;
    case "do-what-it-says":
        //run that function
        break;
    default:
        console.log("Enter a command")
};

function spotifyThis(song){
    spotify.search({type: 'track',query: song,limit:1}).then(function (data) {
		console.log('Artist: '+data.tracks.items[0].artists[0].name);
		console.log('Song: '+data.tracks.items[0].name);
		console.log('Album: '+data.tracks.items[0].album.name);
		console.log('Spotify Link: '+data.tracks.items[0].preview_url);
		
	}).catch(function(err) {
		console.log('Artist: Ace of Base');
		console.log('Song: The Sign');
		console.log('Album: The Sign');
	});
}