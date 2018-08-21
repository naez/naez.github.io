$(function() {

    var secondMenu = $('#secondMenu').find('ul').clone();
    $('#mainMenu').append(secondMenu);

    $('#showMenu').on("click", function() {
        $('#mainMenu').stop().slideToggle('300');
        $(this).parent('.bar').toggleClass('act');
    });
/*  
    var windowW = $(window).width();
    var closeMenu = function() {
        $(".menu a").on('click', function() {
            $('.menu').hide();
        });
    };
    if (windowW <= 540) {
        closeMenu();
    }
    $( window ).resize(function() {
        if (windowW <= 540) {
            closeMenu();
        }
    });
	

*/
});