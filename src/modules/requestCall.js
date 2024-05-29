import { openModal, hideModal } from './helpers';

export const requestCall = () => {
  const callbackButtons = document.querySelectorAll('.callback-btn'),
    requestBtns = document.querySelectorAll('.js-make-request'),
    callbackModal = document.querySelector('.modal-callback'),
    overlayBlock = document.querySelector('.modal-overlay'),
    servicesBtn = document.querySelector('.button-services');

  const allRequestButtons = [...callbackButtons, ...requestBtns, servicesBtn];

  allRequestButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      openModal(callbackModal, overlayBlock);
    });
  });

  document.addEventListener('click', ({ target }) => {
    if (
      target.classList.contains('modal-close') ||
      target.classList.contains('modal-close__img') ||
      target.classList.contains('modal-overlay')
    ) {
      hideModal(callbackModal, overlayBlock);
    }
  });
};
