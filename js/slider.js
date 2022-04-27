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
