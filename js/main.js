//=require jquery/dist/jquery.min.js

$(document).ready(function() {
  // Hamburger

  $(".navbar-toggler").click(function() {
    $(".navbar-collapse").slideToggle();
    $('.navbar-toggler').toggleClass('navbar-toggler-active');
    $('.navbar-toggler-icon').toggleClass('navbar-toggler-active');
  })

  // Scroll

  $("class or id").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  // modal window

  $('.modal-open').click( function(event){ 
    event.preventDefault(); 
    $('.modal-overlay').fadeIn(400, 
      function(){ 
        $('.modal-form') 
          .css('display', 'block') 
          .animate({opacity: 1, top: '50%'}, 200); 
    });
  });
  /* close modal */
  $('.modal-close, .modal-overlay').click( function(){ 
    $('.modal-form')
      .animate({opacity: 0, top: '45%'}, 200,  
        function(){
          $(this).css('display', 'none');
          $('.modal-overlay').fadeOut(400);
        }
      );
  });

});
  //tabs control
(function($) {
  $(function() {
    $('.tabs-heading').on('click', 'li:not(.tabs-active)', function() {
      $(this)
        .addClass('tabs-active').siblings().removeClass('tabs-active')
        .closest('.tabs').find('.tabs-content').removeClass('tabs-active').eq($(this).index()).addClass('tabs-active');
    });
  });
})($);

  //  Accordion
$(function() {
    $('.accordion-item-title').click(function() {
      var $item = $(this).parents('.accordion-item');
      
      $item.toggleClass('accordion-item-active').siblings('.accordion-item-active').removeClass('accordion-item-active');
    });
  });

