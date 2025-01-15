let swiper;
function initSwiper() {
  swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 16,
      allowTouchMove: true,

      pagination: {
        el: '.swiper-pagination',
              type: "bullets",
      clickable:'true'
      },

  });
}

function destroySwiper() {
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null; 
  }
}

function checkWidth() {
  if (window.innerWidth < 768) {
    if (!swiper) { 
      initSwiper();
    }
  } else {
    destroySwiper();
  }
}

  window.addEventListener('resize', checkWidth);
  

  checkWidth();