//function to stop all animations because I get confused/overwhelmed easily

$('.stopBtn').click(function() {
    //Hides the animated closing time info
    //$("#countdown").hide();
    clearInterval(countdown);
    
    //Pauses all flickity stuff from autoplaying
    $('.main-gallery').flickity('stopPlayer');
    
    // The donations bar animation still stubbornly plays. Another potential solution is to replace all the HTML there with different static HTML
    $('.donations').progressBar({
        animation : false,
        animateTarget : false
    });
        $(window).scroll(function() {
            if ( $( '.sonny_progressbar.animate' ).length < 1 ) {
                return;
            }
            // If there is an animate element visible on the page, disable the animation
            console.log('do not animate');
        });
    
    // Removes 3d animated flip behaviour from flip trivia card
    $( "#card" ).css( "transition", "none" );
    $( "#slideCard1" ).css( "transition", "none" );
    
    // Pauses the currently playing embedded youtube videos
    // can be changed to "stop" by replacing 'pauseVideo' with 'stopVideo'
    $('.youtube-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
});
