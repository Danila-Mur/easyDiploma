export const accordeon = () => {
  const items = document.querySelectorAll('.accordeon .element');

  items.forEach((item) => {
    item.addEventListener('click', () => {
      const itemContent = item.querySelector('.element-content');
      if (!item.classList.contains('active')) {
        item.classList.remove('active');
        closeAllItems();

        itemContent.style.display = 'block';
        item.classList.add('active');
      } else {
        itemContent.style.display = 'none';

        item.classList.remove('active');
      }
    });
  });

  function closeAllItems() {
    items.forEach((item) => {
      const itemContent = item.querySelector('.element-content');
      itemContent.style.display = 'none';

      item.classList.remove('active');
    });
  }
};
