/*------------------------------------------------------------------
Project:        Seven - HTML onpage theme by GraphBerry.com
Version:        1.0
Last change:    10/03/2015
Author:         GraphBerry
URL:            http://graphberry.com
License:        http://graphberry.com/pages/license
-------------------------------------------------------------------*/

$(function () {
    'use strict';

/*--------------------------------------------------
    WOW Effects Animation
    ---------------------------------------------------*/

    var wow = new WOW({
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       false        // trigger animations on mobile devices (true is default)
});
    wow.init();

/*--------------------------------------------------
    Page Scroll Features 
    ---------------------------------------------------*/
    smoothScroll.init({
        speed: 1000,
        updateURL: true,
        offset: 50
    });


   

/*--------------------------------------------------
    Initialize portfolio filter
    ---------------------------------------------------*/

    $('#filter-controls').mixItUp();



/*--------------------------------------------------
    Set main image height.
    ---------------------------------------------------*/


//What happen on window resize
$(window).resize(function () {
    homeFullScreen();
});




//What happen on window scroll  
$(window).on("scroll", function (e) {
    setTimeout(function () {
        stickyMenu();
    }, 300)
});

});