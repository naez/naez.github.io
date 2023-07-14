var addDays = 10800000;
var end = localStorage.getItem('timerData'); 
var currTime =  (new Date()).getTime();
var newTime =  (new Date()).getTime() + addDays;
if (end) {
  if (end<currTime) {
    end = newTime; 
  }
} else {
  end = newTime; 
}
localStorage.setItem('timerData',end);
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour *24;
var timer;

function showRemaining()
{
    var now = new Date();
    var distance = end - now;
    if (distance < 0 ) {
       // handle expiry here..
       clearInterval( timer ); // stop the timer from continuing ..
       //alert('Expired'); // alert a message that the timer has expired..
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor( (distance % _day ) / _hour );
    var minutes = Math.floor( (distance % _hour) / _minute );
    var seconds = Math.floor( (distance % _minute) / _second );
    var milliseconds = distance % _second;

    var countdownElement = $('.timer ul');
    countdownElement.html('<li>'+(days.toString().length<2?"0"+days:days)+' <span>дней</span></li><li>'+(hours.toString().length<2?"0"+hours:hours)+' <span>часов</span></li><li>'+(minutes.toString().length<2?"0"+minutes:minutes)+' <span>минут</span></li><li>'+(seconds.toString().length<2?"0"+seconds:seconds)+' <span>секунд</span></li>');
}

timer = setInterval(showRemaining, 70);


$(function() {

	$('.hidd_menu').on("click", function() {
		$('.menu').stop().slideToggle('300');
		$('header .leftMenu').slideUp('100');
	});
	$(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    var windowW = $(window).width();
    var closeMenu = function() {
        $(".menu a").on('click', function() {
            $('.menu').slideUp();
        });
    };
    if (windowW <= 767) {
        closeMenu();
    }
    $(window).resize(function() {
        if (windowW <= 767) {
            closeMenu();
        }
    });
});
$(window).scroll(function(){
    if ($(this).scrollTop() > 111) {
        $('body').addClass('headerFix');
    } else {
     	$('body').removeClass('headerFix');
    }
});