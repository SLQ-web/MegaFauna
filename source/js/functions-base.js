function ShowTime() {

	//access system clock and get the time
	var aest = new Date();
	var localTime = aest.getTime();
	
	//obtain local UTC offset and convert to msec
	var localOffset = aest.getTimezoneOffset()*60000;
	
	//Get total UTC time in msec
	var utc = localTime + localOffset;
	//obtain and add destination UTC time offset (Brisbane, Australia +10)
	var offset = 10;
	var brisbane = utc + (3600000*offset);
	var brisDay = new Date(brisbane);
	var brisDay = brisDay.getDay();
	//Set weekend days with different opening hours
	//Set numbers representing weekend days - 0 for Sunday, 6 for Saturday
	if (brisDay==0 || brisDay==5 || brisDay==6) {
		hoursBase = 16;
		hoursBefore = 6
	}
	else {
		hoursBase = 19;
		hoursBefore = 9
	}
	
	//convert msec value (with timezone offset) to datetime string variables
	consTime = new Date(brisbane);
	var brisHours = hoursBase-consTime.getHours();
	var brisMinutes = 60-consTime.getMinutes();
	var brisSec = 60-consTime.getSeconds();
	
	//complete string for offset AEST local time
	//show CLOSED message if past closing time
	if (brisHours<0 || brisHours>hoursBefore) {
	var timeLeft = "<strong>The SLQ building is currently closed.</strong>";
        //currently set the first if/else statement to trigger after 12pm for testing. SVG line doesn't want to repeat-x when using inline.
    } else if (brisHours<3 || brisHours>hoursBefore) {
        var timeLeft = "SLQ will be open for another<br /><strong style='background-image:url(img/wavy-underline2.svg);background-repeat:repeat-x;background-position:left 15px;background-size:10px 13px'>" +brisHours+' hrs '+brisMinutes+' min '+brisSec+' sec'+ "</strong> today";
    } else if (brisHours<2 || brisHours>hoursBefore) {
        var timeLeft = "SLQ will be open for another<br /><strong style='background-image:url(img/wavy-underline3.svg);background-repeat:repeat-x;background-position:left 15px;background-size:10px 13px'>" +brisHours+' hrs '+brisMinutes+' min '+brisSec+' sec'+ "</strong> today";
    } else if (brisHours<1 || brisHours>hoursBefore) {
        var timeLeft = "SLQ will be open for another<br /><strong style='background-image:url(img/wavy-underline4.svg);background-repeat:repeat-x;background-position:left bottom'>" +brisHours+' hrs '+brisMinutes+' min '+brisSec+' sec'+ "</strong> today";
	}
        else {
	var timeLeft = "SLQ will be open for another<br /><strong>" +brisHours+' hrs '+brisMinutes+' min '+brisSec+' sec'+ "</strong> today";
	//var timeLeft = brisHours+' hrs '+brisMinutes+' min '+brisSec+' sec';
	}
	
	//output adjusted time into page
    document.getElementById("countdown").innerHTML = timeLeft;
}

//Setup variable to update on setInterval function every 1000 ticks
var countdown = setInterval(ShowTime ,1000);

// initialise the flickity sliders with jQuery
$('.main-gallery').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: 2000,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true
});

    // initialise the page in packery layout with jQuery
//    var $grid = $('.grid').packery({
//      itemSelector: '.grid-item',
//      gutter: 0,
//      columnWidth: 0,
//      rowHeight: 0,
//      isOriginTop: true,
//      isHorizontal: false,
//      percentPosition: true,
//      stamp: '.stamp',
//    })
    
// initialise the page in packery layout with vanilla js
var elem = document.querySelector('.grid');
var pckry = new Packery( elem, {
  // options
  itemSelector: '.grid-item',
  gutter: 0,
  columnWidth: 0,
  rowHeight: 0,
  isOriginTop: true,
  isHorizontal: false,
  percentPosition: true,
  stamp: '.stamp',
});
        
// initialise Packery Dragabillity (allow panels to be repositioned within flow)
//        $grid.find('.grid-item').each( function( i, itemElem ) {
//          // make element draggable with Draggabilly
//          var draggie = new Draggabilly( itemElem );
//          // bind Draggabilly events to Packery
//          $grid.packery( 'bindDraggabillyEvents', draggie );
//        });
//
//        $grid.on( 'dragItemPositioned', function( event, draggedItem ) {
//          setTimeout(function(){
//            $grid.packery('layout');
//              console.log('content dragged')
//          },100); 
//        });

// Social media buttons widget with background image generated by SLQ Instagram feed (most recent uploaded image)
// Instagram feed is currently connected to and referencing Coolwebs Instagram account (ownder is RA)
var feed = new Instafeed({
    get: 'user',
    userId: '249842490',
    accessToken: '249842490.1677ed0.0283e662751a4e369ae856f60a4b6228',
    sortBy: 'most-recent',
    resolution: 'low_resolution',
    limit: 1,
    clientId: 'dee7958de6a64ed284b95abb1619b790',
    template: '<div class="insta-image" style="background-image: url({{image}});background-size: cover;height:285px;"><div class="social-buttons"> <table> <tr> <td><a href="https://twitter.com/slqld"><img src="'+jsFileLocation+'img/social/iconmonstr-twitter-4-icon.svg" class="social-icon"/></a></td><td><a href="https://www.facebook.com/statelibraryqld/"><img src="../img/social/iconmonstr-facebook-4-icon.svg" class="social-icon"/></a></td><td><a href="https://www.instagram.com/statelibraryqld/"><img src="../img/social/iconmonstr-instagram-9-icon.svg" class="social-icon active-social-data"/></a></td></tr><tr> <td><a href="https://au.pinterest.com/SLQShop/"><img src="img/social/iconmonstr-pinterest-1.svg" class="social-icon"/></a></td><td><a href="https://vimeo.com/statelibraryqld"><img src="img/social/iconmonstr-vimeo-4-icon.svg" class="social-icon"/></a></td><td><a href="https://www.youtube.com/user/statelibraryqld"><img src="img/social/iconmonstr-youtube-4-icon.svg" class="social-icon"/></a></td></tr><tr> <td><img src="img/social/iconmonstr-map-icon.svg" class="social-icon"/></td><td><img src="img/social/iconmonstr-layer-6-icon.svg" class="social-icon"/></td><td><img src="img/social/iconmonstr-light-bulb-3-icon.svg" class="social-icon"/></td></tr></table> </div></div>'
    //make this content above into a JS variable. Looks real nasty inserted straight into the function.
});
feed.run();
            
// attach progress bar animation to object
//Credits to http://www.jqueryscript.net/loading/Custom-Viewport-Based-jQuery-Progress-Bar-Plugin-Progressbar-js.html

$('.donations').progressBar({
      height : "30",
      backgroundColor : "#E0E0E0",
      shadow : false,
      percentage : true,
      border : false,
      animation : true,
      animateTarget : true,
      barColor : "black",
 });

// jQuery toggle for other sites buttons
// RA 2016/06/10 changed the function so that clickable area is isolated and uses ASCCI toggle characters, not bg images
  $(document).ready(function($) {
    $('.otherSites').find('.accordion-toggle span').click(function(){

      //Expand or collapse this panel
      $(this.parentNode).next().slideToggle('fast');

        // Determine if it's open or closed
        var toggleState = $(this).html();
        if (toggleState=="+") {
            $(this).html("-");
        } else if (toggleState=="-") {
            $(this).html("+")
        }

      //Hide the other panels
      $(".accordion-content").not($(this.parentNode).next()).slideUp('fast');

        //Find change the icon of any open panels back to closed
        if($('.otherSites').find('.accordion-content span').html("-")){
            $(".toggleIcon").not($(this)).html("+")
        }
    });
  });
