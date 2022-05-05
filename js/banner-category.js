const bannerCategoryList = document.querySelector(
  '.banner-category > .category-list'
);

let activeCategory = document.querySelector('.category-item.is-active');

bannerCategoryList.addEventListener('click', (event) => {
  const target = event.target;
  const listItem = target.parentNode;

  if (listItem.classList.contains('category-item')) {
    activeCategory.classList.remove('is-active');
    listItem.classList.add('is-active');

    activeCategory = listItem;
  }
});
