export const smoothScrollUp = () => {
  const smoothScrollBlock = document.querySelector('.up'),
    questBlock = document.querySelector('.quest-section');

  smoothScrollBlock.style.display = 'none';
  smoothScrollBlock.style.cursor = 'pointer';

  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= questBlock.offsetTop - document.body.scrollTop - questBlock.clientHeight) {
      smoothScrollBlock.style.display = 'block';
    } else {
      smoothScrollBlock.style.display = 'none';
    }
  });

  smoothScrollBlock.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  
};
