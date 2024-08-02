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

    spaceBetween: 120,
    loop: true,
    autoplay: {
      delay: 0,
      // pauseOnMouseEnter: true,       
      // disableOnInteraction: false,    
    },
    speed: 2000,
    slidesPerView: 'auto',
  });

  // const event = new Swiper('.events__slider', {
  //   slidesPerView: 3,
  //   spaceBetween: 10,
  //   breakpoints: {
  //     300: {
  //       slidesPerView: 1,
  //     },
  //     500: {
  //       slidesPerView: 2,
  //     },
  //     900: {
  //       slidesPerView: 3,
  //     }

  //   },

  //   navigation: {
  //     nextEl: '.events-swiper-button-next',
  //     prevEl: '.events-swiper-button-prev',
  //   },

  //   pagination: {
  //     el: '.events-swiper-pagination',
  //     clickable: true,
  //   }

  // })

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
