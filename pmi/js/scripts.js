$(function() {
  /* Slider */
  $('#slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    fade: true
  });

  /* label forms */
  $('.form-control_with-text input, .form-control_with-text textarea').focus(function() {
    $(this).parent().addClass("input_active");
  });
  $('.form-control_with-text input, .form-control_with-text textarea').blur(function() {
    if (!$(this).val()) {
      $(this).parent().removeClass("input_active");
    }
  });

  /* modal.js */
  $(".modal").each(function(){
    var modalId = $(this).attr('id');
    $(this).find('.close-modal').attr('data-modal', '#'+modalId)
    $(this).wrap('<div class="overlay"></div>')
    $(this).prepend("<i class='close-modal' data-modal='#"+modalId+"'></i>")
  });
  $("[data-modal]").on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
        modal = $this.data("modal");

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
});
