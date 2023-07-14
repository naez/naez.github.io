$(function() {

	$('#menu-left').clone().appendTo('#navigation');
	$('#navigation #menu-left').removeClass('menu-left').addClass('main-menu');

	$('#showMenu').on("click", function() {
		$('#main-menu').stop().slideToggle('300');
		$('#navigation #menu-left').slideUp('100');
	});
	$('#showCatalog').on("click", function() {
		$('#navigation #menu-left').stop().slideToggle('300');
		$('#main-menu').slideUp('100');
	});


	$('.basket-table').on('click', '.product-reset-btn', function(){
		$(this).parents('tr').remove()
	});

	$("[data-click=showHiddenText]").on('click', function(e){
		e.preventDefault();
		$(this).prev('.hidden-text').slideDown(300);
		$(this).hide()
	});
	$("select").selectBoxIt();


	/* Sliders */
	$('#product-slider').lightSlider({
		item: 3,
		loop: true,
		slideMove: 3,
		controls: true,
		easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
		speed: 600,
		slideMargin: 20,
		galleryMargin: 50,
		enableTouch: false,
		enableDrag: false,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					item: 2,
					slideMove: 2
				}
			},
			{
				breakpoint: 580,
				settings: {
					item: 1,
					slideMove: 1
				}
			}
		]
	});

	/* modal.js */
	$(".modal").each( function(){
			var modalId = $(this).attr('id');
			$(this).find('.close-modal').attr('data-modal', '#'+modalId)
			$(this).wrap('<div class="overlay"></div>')

			$(this).prepend("<i class='close-modal' data-modal='#"+modalId+"'></i>")
	});
	$("[data-modal]").on('click', function(e){
			e.preventDefault();
			e.stopImmediatePropagation;

			var $this = $(this),
					modal = $($this).data("modal");

			$('body').addClass('modal-active');
			$(modal).parents(".overlay").addClass("open");
			setTimeout( function(){
					$(modal).addClass("open");
			}, 350);

			$(document).on('click', function(e){
					var target = $(e.target);

					if ($(target).hasClass("overlay")){
							$(target).find(".modal").each( function(){
									$(this).removeClass("open");
							});
							setTimeout( function(){
									$('body').removeClass('modal-active');
									$(target).removeClass("open");
							}, 350);
					}
			});
	});
	$(".close-modal").on('click', function(e){
			e.preventDefault();
			e.stopImmediatePropagation;

			var $this = $(this),
					modal = $($this).data("modal");

			$(modal).parents(".overlay").removeClass("open");
			setTimeout( function(){
					$('body').removeClass('modal-active');
					$(modal).removeClass("open");
			}, 350);

	});



	//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
$(document).on('click','.btn-number',function(e){
    e.preventDefault();
	plusminus ($(this));
});


function plusminus(th) {
	fieldName = th.attr('data-field');
    type      = th.attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {

            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if(parseInt(input.val()) == input.attr('min')) {
                th.attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                th.attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
}


$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
  minValue =  parseInt($(this).attr('min'));
  maxValue =  parseInt($(this).attr('max'));
  valueCurrent = parseInt($(this).val());

  name = $(this).attr('name');
  if(valueCurrent >= minValue) {
      $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
  } else {
      alert('К сожалению, минимальное значение было достигнуто');
      $(this).val($(this).data('oldValue'));
  }
  if(valueCurrent <= maxValue) {
      $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
  } else {
      alert('К сожалению, максимальное значение было достигнуто');
      $(this).val($(this).data('oldValue'));
  }
});
$(".input-number").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
         // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
         // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
             // let it happen, don't do anything
             return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
  });
});
