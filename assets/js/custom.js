/*--------------- Flight js add --------*/

// =============*** preloader ***=============== //

$(window).on('load', function () {
    $('.preloader').fadeOut(1000);
})






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
    spaceBetween: 30,
    // grabCursor: true,
    // effect: "fade",
    effect: "cards",
    loop: true,
    autoplay: {
        delay: 3

    },
    speed: 4000,

});

// Team slider 
const team__slider = new Swiper('.team__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    autoplay: {
        delay: 1,
        disableOnInteraction: true
    },
    speed: 3000,
});



// form validation
// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
})



//============ password hide or show =========
let passwordInput = document.getElementById('account-pass'),
    toggle = document.getElementById('btnToggle'),
    icon = document.getElementById('eyeIcon');

function togglePassword() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.add("fa-eye-slash");
        //   toggle.innerHTML = 'hide';
    } else {
        passwordInput.type = 'password';
        icon.classList.remove("fa-eye");
        //   toggle.innerHTML = 'show';
    }
}

function checkInput() {
    if (passwordInput.value === '') {
        toggle.style.display = 'none';
        toggle.innerHTML = 'show';
        passwordInput.type = 'password';
    } else {
        toggle.style.display = 'block';
    }
}

/* toggle.addEventListener('click', togglePassword, false);
passwordInput.addEventListener('keyup', checkInput, false); */







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


// =================== header js start here ===================
$("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
// drop down menu width overflow problem fix
$('ul').parent('li').on('hover', function () {
    var menu = $(this).find("ul");
    var menupos = $(menu).offset();
    if (menupos.left + menu.width() > $(window).width()) {
        var newpos = -$(menu).width();
        menu.css({
            left: newpos
        });
    }
});
$('.menu li a').on('click', function (e) {
    var element = $(this).parent('li');
    if (parseInt($(window).width()) < 992) {
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp(300, "swing");
        } else {
            element.addClass('open');
            element.children('ul').slideDown(300, "swing");
            element.siblings('li').children('ul').slideUp(300, "swing");
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp(300, "swing");
        }
    }


});

$('.header-bar').on('click', function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
})

//Header
var fixed_top = $("header");
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
        fixed_top.addClass("header-fixed fadeInUp");
    } else {
        fixed_top.removeClass("header-fixed fadeInUp");
    }
});
// =================== header js end here ===================