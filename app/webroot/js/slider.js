function detectMobile() {
    if($(window).innerWidth() <= 768) {
        return true;
    } else {
        return false;
    }
}
 var contentWidth = $(window).innerWidth() * 0.6666666667 + 20;
$('.slideContainer ul.slideList').css('margin-left', "-" + contentWidth + "px");

function moveSlide() {
    $( "a.control_nextSlide").unbind( "click" );
    $( "a.control_prevSlide").unbind( "click" );
    var contentWidth = $(window).innerWidth() * 0.6666666667 + 20;
    var windowWidth = $(window).innerWidth();
    $('a.control_nextSlide').on('click', function(event) {
        $('.slideContainer ul.slideList').animate({
            left: "-=" + contentWidth
        }, 1000, function(){
            $('.slideContainer ul.slideList li.slide:first-child').appendTo('.slideContainer ul.slideList');
            $('.slideContainer ul.slideList').css('left', '');
        });
    });

    $('a.control_prevSlide').on('click', function(event) {
    $('.slideContainer ul.slideList').animate({
            left: "+=" + contentWidth
        }, 1000, function(){
            $('.slideContainer ul.slideList li.slide:last-child').prependTo('.slideContainer ul.slideList');
            $('.slideContainer ul.slideList').css('left', '');
        });
    });
}

$(document).ready(moveSlide);
$(window).resize(moveSlide);

var swipeStart;
var swipeEnd;

function startup() {
  var el = document.querySelector('.slider');
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  console.log("initialized.");
}

function handleSwipe() {
    $( "a.control_nextSlide").unbind( "click" );
    $( "a.control_prevSlide").unbind( "click" );
    var contentWidth = $(window).innerWidth() * 0.6666666667 + 20;
    var windowWidth = $(window).innerWidth();
    $('a.control_nextSlide').on('click', function(event) {
        $('.slideContainer ul.slideList').animate({
            left: "-=" + contentWidth
        }, 1000, function(){
            $('.slideContainer ul.slideList li.slide:first-child').appendTo('.slideContainer ul.slideList');
            $('.slideContainer ul.slideList').css('left', '');
        });
    });

    $('a.control_prevSlide').on('click', function(event) {
    $('.slideContainer ul.slideList').animate({
            left: "+=" + contentWidth
        }, 1000, function(){
            $('.slideContainer ul.slideList li.slide:last-child').prependTo('.slideContainer ul.slideList');
            $('.slideContainer ul.slideList').css('left', '');
        });
    });
};


function handleStart(event) {
    swipeStart = event.changedTouches[0].clientX;
}

function handleEnd(event) {
    swipeEnd = event.changedTouches[0].clientX;
    handleSwipe();
}

$(document).ready(function(){
    var self = $('.slider .slideContainer ul.slideList');
    var windowWidth = $(window).innerWidth();
    var contentWidth = $(window).innerWidth() * 0.6666666667 + 20;

    $.get("app/webroot/ajax/allSlides.tpl", function() {
            }).done(function(response) {
                self.append(response);
                if(detectMobile() == true) {
                    
                } else {
                  
                }
                $('.slideContainer ul.slideList').css('width', contentWidth * 3 + "px");
                $('.slideContainer ul.slideList li.slide').css('width', contentWidth + "px");
            });

    //initialize touch events
    startup();
});

$(window).resize(function(){
    var windowWidth = $(window).innerWidth();
      var contentWidth = $(window).innerWidth() * 0.6666666667 + 20;
     $('.slideContainer ul.slideList').css('width', contentWidth * 3 + "px");
    $('.slideContainer ul.slideList').css('margin-left', "-" + contentWidth + "px");
    $('.slideContainer ul.slideList li.slide').css('width', contentWidth);
});

$(window).resize(function() {

});


$(document).ready(function() {
	var windowWidth = $(window).innerWidth();
	$('.featureContainer').css({"width": windowWidth * 2});

	setInterval(function () {
        moveRight();
    }, 3000);

	 function moveRight() {
	 	$('.feature ul').animate({
            left: "-=" + 400
        }, 2000, function() {
        	 $('.feature ul').css('left', '');
        	 $('.feature ul li:nth-child(-n+3)').clone().appendTo('.feature ul');
        	 $('.feature ul li:nth-child(-n+3)').remove();
        });
	 }
});