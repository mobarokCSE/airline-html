  /*--------------- swipper slider  js new add--------*/


  //   offer slider
  const swiper = new Swiper('.offer__slider', {
      spaceBetween: 24,
      grabCursor: true,
      loop: true,
      slidesPerView: 1,
      breakpoints: {
          576: {
              slidesPerView: 2,
          },
          992: {
              slidesPerView: 3,
          },
          1200: {
              slidesPerView: 3,
              spaceBetween: 30,
          },
      },
      autoplay: {
          delay: 5,
      },
      speed: 4000,
  });

  //   package slider
  const swiperPackage = new Swiper('.package__slider', {
      spaceBetween: 24,
      grabCursor: true,
      loop: true,
      slidesPerView: 1,
      breakpoints: {
          576: {
              slidesPerView: 2,
          },
          992: {
              slidesPerView: 3,
          },
          1200: {
              slidesPerView: 3,
              spaceBetween: 30,
          },
      },
      autoplay: {
          delay: 5,
      },
      speed: 4000,
  });

  //   partner slider
  const swiperPartner = new Swiper('.partner__slider', {
      spaceBetween: 24,
      grabCursor: true,
      loop: true,
      slidesPerView: 2,
      breakpoints: {
          576: {
              slidesPerView: 3,
          },
          992: {
              slidesPerView: 4,
          },
          1200: {
              slidesPerView: 6,
              spaceBetween: 30,
          },
      },
      autoplay: {
          delay: 1,
          disableOnInteraction: true
      },
      speed: 5000,
  });


  //   testimonial slider
  const testimonial = new Swiper('.testimonial__slider', {
      grabCursor: true,
      spaceBetween: 24,
      slidesPerView: 1,
      loop: true,
      //   autoplay: {
      //       delay: 1,
      //       disableOnInteraction: true
      //   },
      speed: 5000,

  });



  //============ Scroll to top js =========
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $('.scrollToTop').css({
              'bottom': '7%',
              'opacity': '1',
              'transition': 'all .5s ease'
          });
      } else {
          $('.scrollToTop').css({
              'bottom': '-30%',
              'opacity': '0',
              'transition': 'all .5s ease'
          })
      }
  });
  //Click event to scroll to top
  $('.scrollToTop').click(function () {
      $('html, body').animate({
          scrollTop: 0
      }, 500);
      return false;
  });