/*--------------- Flight js add --------*/



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
    spaceBetween: 24,
    grabCursor: true,
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 1
    },
    speed: 5000,

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

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 300) {
//         $('.scrollToTop').css({
//             'bottom': '7%',
//             'opacity': '1',
//             'transition': 'all .5s ease'
//         });
//     } else {
//         $('.scrollToTop').css({
//             'bottom': '-30%',
//             'opacity': '0',
//             'transition': 'all .5s ease'
//         })
//     }
// });

//Click event to scroll to top
// $('.scrollToTop').click(function () {
//     $('html, body').animate({
//         scrollTop: 0
//     }, 500);
//     return false;
// });