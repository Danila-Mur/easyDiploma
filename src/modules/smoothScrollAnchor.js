export const smoothScrollAnchor = () => {
  const anchors = document.querySelectorAll('.js-anchor-link');

  anchors.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();

      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
};
