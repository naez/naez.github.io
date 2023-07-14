$(function() {



    var slider = $('#slider').lightSlider({
        item:1,
        loop:true,
        slideMove:1,
        speed:600,
        auto:true,
        pause:8000,
        pager:true,
        slideMargin:0,
        controls:false,
        galleryMargin:0
    });   
    function sPrevNext() {
        $('.slider .lSPager').wrap('<div class="PrevNext"></div>');
        $('.slider .PrevNext').prepend('<span id="goToPrevSlide"></span>').append('<span id="goToNextSlide"></span>');
        $('.slider').on('click','#goToPrevSlide',function(){
            slider.goToPrevSlide(); 
        });
        $('.slider').on('click','#goToNextSlide',function(){
            slider.goToNextSlide(); 
        });
    }
    setTimeout(sPrevNext, 100);

    var catalog = $('#catalog').lightSlider({
        item:3,
        loop:false,
        slideMove:3,
        speed:600,
        pager:true,
        slideMargin:0,
        controls:false,
        galleryMargin:10,
        responsive : [
            {
                breakpoint:990,
                settings: {
                    item:2,
                    slideMove:2
                  }
            },
            {
                breakpoint:380,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });   
    function cPrevNext() {
        $('#catalogIndex .lSPager').wrap('<div class="PrevNext"></div>');
        $('#catalogIndex .PrevNext').prepend('<span id="goToPrevSlide"></span>').append('<span id="goToNextSlide"></span>');
        $('#catalogIndex').on('click','#goToPrevSlide',function(){
            catalog.goToPrevSlide(); 
        });
        $('#catalogIndex').on('click','#goToNextSlide',function(){
            catalog.goToNextSlide(); 
        });
    }
    setTimeout(cPrevNext, 100);

    var similar = $('#similar').lightSlider({
        item:3,
        loop:false,
        slideMove:3,
        speed:600,
        pager:true,
        slideMargin:0,
        controls:false,
        galleryMargin:10,
        responsive : [
            {
                breakpoint:1280,
                settings: {
                    item:2,
                    slideMove:2
                  }
            },
            {
                breakpoint:440,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });   
    function simPrevNext() {
        $('#catalogSimilar .lSPager').wrap('<div class="PrevNext"></div>');
        $('#catalogSimilar .PrevNext').prepend('<span id="goToPrevSlide"></span>').append('<span id="goToNextSlide"></span>');
        $('#catalogSimilar').on('click','#goToPrevSlide',function(){
            similar.goToPrevSlide(); 
        });
        $('#catalogSimilar').on('click','#goToNextSlide',function(){
            similar.goToNextSlide(); 
        });
    }
    setTimeout(simPrevNext, 100);


/*
    $('.hidd_menu').on("click", function() {
        $('.menu').stop().slideToggle('300');
    });
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