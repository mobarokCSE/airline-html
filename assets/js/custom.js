  /*--------------- swipper slider  js new add--------*/


  //   offer slider
  const swiper = new Swiper('.offer__slider', {
      // spaceBetween: 24,
      grabCursor: true,
      loop: true,
      slidesPerView: 1,
      breakpoints: {
          576: {
              slidesPerView: 2,
          },
          992: {
              slidesPerView: 3,
              spaceBetween: 15,
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
      // spaceBetween: 24,
      grabCursor: true,
      loop: true,
      slidesPerView: 1,
      breakpoints: {
          576: {
              slidesPerView: 2,
          },
          992: {
              slidesPerView: 3,
              spaceBetween: 15,
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
      // spaceBetween: 24,
      grabCursor: true,
      loop: true,
      slidesPerView: 6,
      breakpoints: {
          576: {
              slidesPerView: 2,
          },
          992: {
              slidesPerView: 4,
              spaceBetween: 15,
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
// ***** testimonial thumb slider
  const testimonialThumb = new Swiper('.testimonial__thumb', {
      grabCursor: true,
      slidesPerView: 1,
      loop: true,
    //   autoplay: {
    //       delay: 1,
    //       disableOnInteraction: true
    //   },
      speed: 5000,

  });

  //   testimonial slider
  // ***** testimonial detail slider

    const testimonialDtail = new Swiper('.testimonial__detail', {
        grabCursor: true,
        slidesPerView: 1,
        loop: true,
        //   autoplay: {
        //       delay: 1,
        //       disableOnInteraction: true
        //   },

        	// direction: 'vertical',
        	//     pagination: {
        	//         clickable: true,
        	//         el: '.swiper-pagination',
        	//         type: 'bullets',
        	//     },
        speed: 5000,
        thumbs: {
            swiper: testimonialThumb
        }

    });