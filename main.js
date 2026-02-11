const swiper = new Swiper('.mySwiper', {
  loop: true,
  speed: 600,
  watchSlidesProgress: true,
  centeredSlides: false,

  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 40,

    pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    560: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 40,
    },
  },
});

const studentSwiper = new Swiper('.student-swiper', {
  effect: 'fade', 
  fadeEffect: {
    crossFade: true 
  },
  speed: 1200,
  loop: true,
  navigation: {
    nextEl: '.student-next',
    prevEl: '.student-prev',
  },
  autoHeight: true, 
});

window.controlPop = function(id, status) {
    const el = document.getElementById(id);
    if (status) {
        el.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    } else {
        el.classList.remove('active');
        document.body.style.overflow = 'auto'; 
    }
}

document.addEventListener('DOMContentLoaded', function() {
    
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('data-target');
            
            openPopup(targetId);
        });
    });
});


function openPopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.classList.add('active'); 
        document.body.style.overflow = 'hidden';
    } else {
        console.error("Popup with ID '" + id + "' was not found in the HTML!");
    }
}

function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.classList.remove('active');
        document.body.style.overflow = 'auto'; 
    }
}

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('open');
  });

