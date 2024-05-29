import Swiper from 'swiper/bundle';

export const swiper = () => {
  new Swiper('.top-slider', {
    autoplay: {
      delay: 3000,
    },
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  new Swiper('.swiper.services-carousel', {
    navigation: {
      nextEl: '.services-arrow .arrow-right',
      prevEl: '.services-arrow .arrow-left',
    },
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
  });
};
