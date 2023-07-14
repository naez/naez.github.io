$(document).ready(function() {

	$("a.fancy").attr('rel','group').fancybox({
		titleFormat:'text'
	});
	$('.menu_but').on('click', function(){
		$(this).next('ul').stop().slideToggle(200);
	});
	
	$('.left_menu').find('.child').prev('a').addClass('parent');


  $('.show_menu').on('click', function(){
    $(this).parent().next('ul').stop().slideToggle();
  });
  $('.show_aside, .back').on('click', function(){
    $('body').toggleClass('menu-visible');
    $('.center>.back').stop().fadeToggle();
  });
  $('#slider').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    speed: 500,
    fade: true,
    arrows: false,
  });
  $('#slider').find('.slick-dots').addClass('container');
  $('.slogan').clone().addClass('afterLogo').insertAfter($(".logo"));

  $('#claster').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1271,
        settings: {
          slidesToShow: 4
        }
      },{
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },{
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },{
        breakpoint: 460,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('#gallery').slick({
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 2
        }
      },{
        breakpoint: 460,
        settings: {
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  });
});

