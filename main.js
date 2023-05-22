// Navbar
let menu = document.getElementById('menu-icon');
let navList = document.querySelector('.nav__list');

menu.onclick = () =>{
    
    navList.classList.toggle('open')
}

document.querySelectorAll('.nav__link').forEach(item => item.addEventListener('click', function(){
    navList.classList.remove('open')
}));

const swiperOne = new Swiper('.swiper.client__slider', {
    // Default parameters
    lopp: true,
    mousewheel: true,
    slidesPerView: 2,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 4,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 5,
      }
    }
  })

  const swiperTwo = new Swiper('.swiper.testimonial', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    mousewheel: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      }
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  
  })

