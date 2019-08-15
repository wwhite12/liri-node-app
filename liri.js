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
        movieThis(process.argv[3]);
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

function movieThis(movie){
    const queryURL = "http://www.omdbapi.com/?apikey=trilogy&t="+process.argv[3];
   
    if(process.argv[3]){
        axios.get(queryURL)
        .then(function(response){
            console.log("Title: "+response.data.Title);
            console.log("Release Year: "+response.data.Year);
            console.log("IMDB Rating: "+response.data.Ratings[0].Value);
            console.log("Rotten Tomatoes Rating: "+response.data.Ratings[1].Value);
            console.log("Country Produced in: "+response.data.Country);
            console.log("Language: "+response.data.Language);
            console.log("Plot: "+response.data.Plot);
            console.log("Actors: "+response.data.Actors);

        })
    
    }
}