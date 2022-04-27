'use strict';

const slider = tns({
  container: '.banner-carousel .slider-list',
  items: 1,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayPosition: 'bottom',
  gutter: 6,
  preventScrollOnTouch: 'auto',
  speed: 500,
  mouseDrag: true,
  arrowKeys: true,
  autoplayButtonOutput: false,
  controlsContainer: '.banner-carousel .slider-controls',
});

const todaySlider = tns({
  container: '.today-best-carousel .slider-list',
  nav: false,
  items: 1,
  gutter: 6,
  edgePadding: 16,
  preventScrollOnTouch: 'auto',
  speed: 500,
  mouseDrag: true,
  controlsContainer: '.today-best-carousel .slider-controls',
  loop: false,
  responsive: {
    768: {
      items: 2,
      edgePadding: 0,
      mouseDrag: false,
      slideBy: 2,
    },
    1170: {
      items: 3,
      slideBy: 3,
    },
  },
});
