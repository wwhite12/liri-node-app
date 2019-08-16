require("dotenv").config();
const keys = require("./keys.js");
const axios = require("axios");
const Spotify = require("node-spotify-api")
const spotify = new Spotify(keys.spotify);


const fs = require("fs");

var userChoice = process.argv.slice(3).join("+");


switch(process.argv[2]){

    case "spotify-this-song":
        spotifyThis(userChoice);
        break;
    case "movie-this":
        movieThis(userChoice);
        break;
    case "do-what-it-says":
        doWhatSays()
        break;
    default:
        console.log(
 `Invalid Command
 Options: spotify-this-song <song name>
            movie-this <movie name>
            do-what-it-says`           
        )
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
    const queryURL = "http://www.omdbapi.com/?apikey=trilogy&t="+userChoice;
   
    if(userChoice){
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
    }else{
        axios.get("http://www.omdbapi.com/?apikey=trilogy&t=Mr.Nobody")
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

function doWhatSays(){
    fs.readFile("./random.txt","utf8",function(err,data){
        if(err){
            return console.log(err)
        }
        var dataArr = data.split(",");

        switch(dataArr[0]){
            case "spotify-this-song":
                spotifyThis(dataArr[1]);
                break;
            case "movie-this":
                movieThis(dataArr[1]);
                break;
            default:
                console.log("Try again")
        }

    })
}