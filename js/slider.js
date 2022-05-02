'use strict';

const MARGIN_MOBILE = 16;
const MARGIN_DESKTOP = 30;

const commonOptions = {
  items: 1,
  gutter: 6,
  nav: false,
  speed: 800,
  mouseDrag: true,
  preventScrollOnTouch: 'auto',
};

const bannerSlider = tns({
  ...commonOptions,
  container: '.banner-carousel .slider-list',
  items: 3,
  slideBy: 1,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayPosition: 'bottom',
  autoplayButtonOutput: false,
  arrowKeys: true,
  controlsContainer: '.banner-carousel .slider-controls',
  responsive: {
    768: {
      mouseDrag: false,
    },
  },
});

const todaySlider = tns({
  ...commonOptions,
  container: '.today-best-carousel .slider-list',
  edgePadding: MARGIN_MOBILE,
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

// NOTE: Book List Carousel
const commonOptions_bookList = {
  nav: false,
  gutter: 6,
  edgePadding: MARGIN_MOBILE,
  autoWidth: true, // slider-item inline 형식으로 배치
  preventScrollOnTouch: 'auto',
  speed: 500,
  mouseDrag: true,
  loop: false,
  responsive: {
    768: {
      edgePadding: MARGIN_DESKTOP,
    },
    1170: {
      edgePadding: 0,
    },
  },
};

const newSlider = tns({
  container: '.new-carousel .slider-list',
  controlsContainer: '.new-carousel .slider-controls',
  ...commonOptions_bookList,
});

const mdPickSlider = tns({
  container: '.md-pick-carousel .slider-list',
  controlsContainer: '.md-pick-carousel .slider-controls',
  ...commonOptions_bookList,
});

const ridiStoreSlider = tns({
  container: '.ridi-store-carousel .slider-list',
  controlsContainer: '.ridi-store-carousel .slider-controls',
  ...commonOptions_bookList,
});

// NOTE: Book Rank Carousel
const commonOptions_rankList = {
  items: 1,
  nav: false,
  gutter: 26,
  preventScrollOnTouch: 'auto',
  speed: 500,
  mouseDrag: true,
  loop: false,
  responsive: {
    768: {
      items: 2,
    },
    1170: {
      items: 3,
    },
  },
};

const nowSlider = tns({
  container: '.now-best-carousel .slider-list',
  controlsContainer: '.now-best-carousel .slider-controls',
  ...commonOptions_rankList,
});

const bestSellerSlider = tns({
  container: '.best-seller-carousel .slider-list',
  controlsContainer: '.best-seller-carousel .slider-controls',
  ...commonOptions_rankList,
});
