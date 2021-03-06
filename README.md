# liri-node-app

## Overview:
This CLI App gives the user the ability to look up information about any song or movie that they would like to learn more about.

## Instructions
From the command line, the user is able to give three different commands to the app.
 * spotify-this-song song-name Ex: node liri.js spotify-this-song Peace of Mind
 * movie-this movie-name Ex: node liri.js movie-this The Breakfast Club
 * do-what-it-says   Ex: node liri.js do-what-it-says

The spotify-this-song command will output the following:
     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from

The movie-this command will output the following:
 * Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.

The do-what-it-says command will read the random.txt file in this folder and if the command matches one of the two stated above, it will perform that function.
* Ex:     random.txt --->  movie-this, Jaws
        Output ----> Information on the movie, Jaws.
## Code Breakdown
![image](./images/primarySwitch.png)
* Based on the user's first command (spotify-this-song, movie-this, or do-what-it-says), this switch will determine which function to run.

![image](./images/spotifyFunction.png)
* node-spotify-api allows the user to call the spotify api to gather information on an inputted song.

![image](./images/movieThisFunction.png)
* Use of axios to call the OMDB API to gather inputted movie information

![image](./images/doWhatSaysFunction.png)
* Breaks up random.txt content into an array that then uses switch to determine which function to run
## Technology
Language: JavaScript
Runtime Environment: Node

Package Dependencies: 
 * axios
 * dotenv
 * moment
 * node-spotify-api

## GitHub Repository
(https://github.com/wwhite12/liri-node-app.git)

### Creator
William White