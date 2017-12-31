# **LIRI-Node-App**

### **Description**

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data. In the command line you will type node liri.js my-tweets, node liri.js spotify-this-song, node liri.js movie-this or node liri.js do-what-it-says. All the data is then logged into a txt file. 


* Twitter - LIRI will display your last twenty tweets. 

* Spotify - LIRI will display the Artist, song name, a preview of the link of the song from spotify and the album that the song is from. If no song is provided the the app will default to "The Sign" by Ace of Base.

* OMDB -    * Title of the movie.
   			* Year the movie came out.
   			* IMDB Rating of the movie.
   			* Rotten Tomatoes Rating of the movie.
   			* Country where the movie was produced.
   			* Language of the movie.
   			* Plot of the movie.
   			* Actors in the movie.

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


 * Do What It Says - Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. It will then run spotify-this-song for "I Want it That Way," as follows the text in random.txt.