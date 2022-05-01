const SCREEN_TABLET = 768;

const GNB_TOP_HEIGHT = 40;
const GNB_BOTTOM_HEIGHT = 113;
const WINDOW_VIEWPORT_HEIGHT = window.innerHeight;

const SCROLL_RANGE = 0.25;
const SCROLL_PADDING = 20;

const gnb = document.querySelector('.gnb');
const main = document.querySelector('main');

let lastY = window.scrollY;

function ActiveOrHideGnbOnScroll() {
  let mainTop = main.getBoundingClientRect().top;

  if (mainTop > GNB_TOP_HEIGHT + SCROLL_PADDING) {
    gnb.classList.remove('is-hide');
    return;
  }

  if (mainTop === GNB_TOP_HEIGHT + SCROLL_PADDING) {
    gnb.classList.add('is-hide');
  }

  setTimeout(() => {
    let amountOfScroll = window.scrollY - lastY;
    let scrollToBottom = amountOfScroll > GNB_BOTTOM_HEIGHT * SCROLL_RANGE;
    let scrollToTop = amountOfScroll < -(WINDOW_VIEWPORT_HEIGHT * SCROLL_RANGE);

    if (scrollToBottom) {
      gnb.classList.add('is-hide');
    }

    if (scrollToTop) {
      gnb.classList.remove('is-hide');
    }

    lastY = window.scrollY;
  }, 500);
}

window.addEventListener('load', () => {
  if (window.innerWidth < SCREEN_TABLET) {
    window.addEventListener('scroll', ActiveOrHideGnbOnScroll);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth < SCREEN_TABLET) {
    window.addEventListener('scroll', ActiveOrHideGnbOnScroll);
  } else {
    gnb.classList.remove('is-hide');
    window.removeEventListener('scroll', ActiveOrHideGnbOnScroll);
  }
});
