const footerDetails = document.querySelector('.global-footer .details');
const detailsTrriger = footerDetails.querySelector('.details-control-button');

function toggleFooterDetails() {
  footerDetails.classList.toggle('is-open');
}

detailsTrriger.addEventListener('click', toggleFooterDetails);
