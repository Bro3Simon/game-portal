
// Scroll reveal, fade in main elements
ScrollReveal().reveal('.flex-grow-1', { delay: 500, distance: '200%', origin: 'top', easing: 'ease' });

// Parallax
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

// Popup Youtube Player
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: '',
        events: {
            'onReady': onPlayerReady
        }
    });
}
function onPlayerReady(event) {
    event.target.playVideo();
}

// displayer player and launch video only if, center .add-button was clicked
var subButtonClicked = false;
$('.add-button').click(function (e) {
    // Check to see sub buttons are displaying
    if ($(".sub-button").width() > 50) {
        // check to make sure the sub button wasn't clicked
        if (subButtonClicked !== true) {
            $('#player-container').fadeIn(500);
            $('#player').fadeIn(100);
            player.loadVideoById("BG6c-nSf6PQ");
        }
    }
});

$('#close-video').click(function () {
    $('#player-container').fadeOut(500);
    $('#player').fadeOut(100);
    player.loadVideoById("");
});

$(document).keyup(function (e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
        $('#player-container').fadeOut(500);
        $('#player').fadeOut(100);
        player.loadVideoById("");
    }
});