// const slider = document.querySelector('[data-slider="info"]');

const initInfoSlider = () => {
  const main = new Swiper('.works__slider', {
    slidesPerView: 3,
    spaceBetween: 100,
    loop: true,
    centeredSlides: true,
    speed: 500,
    autoplay: {
      enabled: false,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        autoplay: {
          enabled: true,
          delay: 4000,
        },

      },
      560: {
        slidesPerView: 2,
        autoplay: {
          enabled: false,
        },
      },
      900: {
        slidesPerView: 2,
        autoplay: {
          enabled: false,
        },
      },
      1660: {
        slidesPerView: 3,
        autoplay: {
          enabled: false,
        },

      }


    },
    navigation: {
      nextEl: '.swiper-button-next-works',
      prevEl: '.swiper-button-prev-works',
    },

    pagination: {
      el: '.works-swiper-pagination',
      type: "progressbar",
    }
  });

  const team = new Swiper('.ticker__marquee', {
    slidesPerView: 4,
    spaceBetween: 100,
    loop: true,
    loopAdditionalSlides: 3,
    autoplay: {
      delay: 0,
      // pauseOnMouseEnter: true,       
      // disableOnInteraction: false,    
    },
    speed: 3000,
    breakpoints: {
      300: {
        spaceBetween: 60,
        slidesPerView: 2,
        speed: 2000,
      },
      768: {
        spaceBetween: 100,
        slidesPerView: 4,
        speed: 3000,
      }
    }
  });

  let eventSwiper;

  const initSwiper = () => {
    if (window.innerWidth <= 1024) {
      if (!eventSwiper) { // Проверяем, был ли уже инициализирован слайдер
        eventSwiper = new Swiper('.grade__slider', {
          slidesPerView: 1,
          spaceBetween: 10,
          autoHeight: true,
          speed: 800,
          autoplay: {
            delay: 3000,
          },
          // pagination: {
          //   el: '.grade-swiper-pagination',
          //   clickable: true,
          // },
        });
      }
    } else {
      if (eventSwiper) { // Если слайдер был инициализирован, уничтожаем его
        eventSwiper.destroy(true, true);
        eventSwiper = null;
      }
    }
  };

  // Инициализация при загрузке страницы
  document.addEventListener('DOMContentLoaded', initSwiper);

  // Инициализация при изменении размеров окна
  window.addEventListener('resize', initSwiper);

  var plus = false;
  var plusSwiper;
  function swiperPlus() {
    var sliderElement = document.querySelector('.plus__slider');
    if (window.innerWidth <= 1060) {
      if (!plus && sliderElement) {
        plus = true;
        plusSwiper = new Swiper('.plus__slider', {
          slidesPerView: 2.5,
          spaceBetween: 10,
          centeredSlides: true,

          speed: 800,
          autoplay: {
            delay: 3000,
          },
          // observer: true,
          // observeParents: true,
          // observeSlideChildren: true,
          breakpoints: {
            310: {
              slidesPerView: .85
            },

            340: {
              slidesPerView: .9,
            },

            370: {
              slidesPerView: .85,
            },

            380: {
              slidesPerView: 1,
            },

            410: {
              slidesPerView: 1.1,
            },

            460: {
              slidesPerView: 1.1,
            },

            530: {
              slidesPerView: 1.25,
            },

            555: {
              slidesPerView: 1.4,
            },

            670: {
              slidesPerView: 1.5
            },

            700: {
              slidesPerView: 1.7,
            },

            740: {
              slidesPerView: 1.8,
            },

            797: {
              slidesPerView: 1.99,
            },

            920: {
              slidesPerView: 2.2,
            },

            980: {
              slidesPerView: 2.5,
            }
          },
          // navigation: {
          //   nextEl: '.days-swiper-button-next',
          //   prevEl: '.days-swiper-button-prev'
          // },

          pagination: {
            el: '.plus-swiper-pagination',
            type: 'progressbar',
          }
        });
      }
    } else if (plusSwiper) {

      plusSwiper.destroy();
      plus = false;


    }
  }

  swiperPlus();
  window.addEventListener("resize", plusSwiper);

};


export { initInfoSlider };
