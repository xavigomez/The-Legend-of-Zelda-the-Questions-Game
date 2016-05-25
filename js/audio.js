$(document).ready(function() {

    var audioBg = document.createElement('audio');
    audioBg.setAttribute('src', 'sound/menu.mp3');
    audioBg.setAttribute('autoplay', 'autoplay');
    audioBg.setAttribute('loop','loop');

    $( '#start-game').click( function(){
        audioBg.pause(); // Stop playing
        audioBg.currentTime = 0; // Reset time
    } );

    $('.fa-play').click(function() {
        audioBg.play();
    });

    $('.fa-pause').click(function() {
        audioBg.pause();
    });



});
