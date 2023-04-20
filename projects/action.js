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

audio = new Audio("/songs/Oh! What a Shiny Night.mp3");

  audio.addEventListener('ended',function(){
        audio.src = "/songs/12pm.mp3";
        audio.pause();
        audio.load();
        audio.play();
    });