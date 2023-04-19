console.log("Javascript Connected");

var songName;
var songArtist;
var songDuration;

var playlist = [];

songName = 'test';

var song = {
    name: songName,
    artist: songArtist, 
    duration: songDuration
};

var source = "songs/Oh! What a Shiny Night.mp3"
 var audio = document.createElement("audio");
 //
 audio.autoplay = true;
 //
 audio.load()
 audio.addEventListener("load", function() { 
     audio.play(); 
 }, true);
 audio.src = source;

console.log(songName);