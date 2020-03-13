$(document).ready(function () {
  $('.nav-button').click(function () {
    $('.nav-button').toggleClass('change');
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 200) {
      $('.nav-menu').addClass('fixed-top');
    } else {
      // $('.nav-menu').removeClass('custom-navbar');
    }
  });
});

 // Banner

       $('.banner-area').slick({
        autoplay: true,
        speed: 800,
        arrows: false,
        dots: true,
        fade: true

      });



// Back To Top

$(document).ready(function(){ 
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 100) { 
        $('#back-to-top').fadeIn(); 
      } else { 
        $('#back-to-top').fadeOut(); 
      } 
    }); 
    $('#back-to-top').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
    }); 
  });



