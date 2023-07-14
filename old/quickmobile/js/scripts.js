

// Респонсивный ColorBox
jQuery.colorbox.settings.maxWidth  = '95%';
jQuery.colorbox.settings.maxHeight = '95%';
 
// Функция ресайза ColorBox
var resizeTimer;
function resizeColorBox()
{
  if (resizeTimer) clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
            if (jQuery('#cboxOverlay').is(':visible')) {
                      jQuery.colorbox.load(true);
            }
  }, 300);
}
 
// Ресайз при изменении размера окна браузера и
// изменении ориентации мобильного устроиства
jQuery(window).resize(resizeColorBox);
window.addEventListener("orientationchange", resizeColorBox, false);


$(window).scroll(function(){
	var w = $(window).width();
	if(w < 991) {
		var pos = parseInt($(window).scrollTop());
		if(pos >= 140){
			$('header').addClass("fixed");
		}
		else {
			$('header').removeClass("fixed");
		} 
	}
	if(w < 577) {
		var pos = parseInt($(window).scrollTop());
		if(pos >= 240){
			$('header').addClass("fixed");
		}
		else {
			$('header').removeClass("fixed");
		} 
	}
});

$(document).ready(function() {
	// Menu
	$('.menu-but').on('click', function(){
		$(this).parent().next().stop().slideToggle();
	});
	$('.cat-but, .left-menu .close').on('click', function(){
		$('.left-menu').toggleClass('active');
		$('body').toggleClass('active')
	});
	$('.menu').find('.third').siblings('a').addClass('arrow');
	
	$('[data-toggle="tooltip"]').tooltip({
		html:'true',
		placement:'right',
	});
	$('[data-toggle="tooltip left"]').tooltip({
		html:'true',
		placement:'left'
	});
    // lightSlider
	$('#items').lightSlider({
        item:8,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:400,
		loop:true,
		pager:false,
		enableDrag:false,
		responsive : [
			{
                breakpoint:1200,
                settings: {
                    item:6
                  }
            },
            {
                breakpoint:992,
                settings: {
                    item:5
                  }
            },
			{
                breakpoint:767,
                settings: {
                    item:4
                  }
            },
			{
                breakpoint:570,
                settings: {
                    item:3
                  }
            },
			{
                breakpoint:440,
                settings: {
                    item:2
                  }
            }
        ]
    });
	$('#advantage').lightSlider({
        item:3,
        slideMove:1,
		slideMargin:20,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:400,
		loop:true,
		keyPress:true,
		pager:false,
		responsive : [
			{
                breakpoint:991,
                settings: {
                    item:2
                }
            },
			{
                breakpoint:595,
                settings: {
                    item:1,
					adaptiveHeight:true
                }
            }
        ]
    });
	$('#crash').lightSlider({
        item:3,
        slideMove:1,
		slideMargin:20,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:400,
		loop:true,
		keyPress:true,
		pager:false,
		responsive : [
			{
                breakpoint:991,
                settings: {
                    item:2
                }
            },
			{
                breakpoint:595,
                settings: {
                    item:1,
					adaptiveHeight:true
                }
            }
        ]
    });
	$('#tks').lightSlider({
        item:4,
        slideMove:1,
		slideMargin:20,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:400,
		loop:true,
		keyPress:true,
		pager:false,
		responsive : [
			{
                breakpoint:991,
                settings: {
                    item:3
                }
            },
			{
                breakpoint:620,
                settings: {
                    item:2
                }
            }
			,
			{
                breakpoint:450,
                settings: {
                    item:1
                }
            }
        ]
    });
	$('#gallery').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:20,
        loop:false,
		gallery:true,
        thumbItem:9,
		thumbMargin: 20,
		adaptiveHeight: true,
		responsive : [
			{
                breakpoint:991,
                settings: {
                    thumbMargin: 10
                }
            },
			{
                breakpoint:550,
                settings: {
                    thumbItem:7,
					thumbMargin: 5
                }
            }
			,
			{
                breakpoint:450,
                settings: {
                    gallery:false,
					pager:false
                }
            }
        ]
    });
	// Colorbox
	$(".colorbox").colorbox({
		rel:'colorbox',
		current:false
	});

});