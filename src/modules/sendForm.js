import { validateForm } from './validateForm';
import { hideModal } from './helpers';

export const sendForm = ({ formId }) => {
  const form = document.querySelector(formId);
  const statusBlock = document.createElement('div');
  const overlayBlock = document.querySelector('.modal-overlay');
  statusBlock.style.textAlign = 'center';
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Отправлено!';

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      if (val) {
        formBody[key] = val;
      }
    });

    if (validateForm(formElements)) {
      statusBlock.textContent = loadText;
      form.append(statusBlock);
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          setTimeout(
            () => (
              (statusBlock.textContent = ''),
              form.closest('.modal-callback') ? hideModal(form.closest('.modal-callback'), overlayBlock) : ''
            ),
            2000
          );
          formElements.forEach((input) => {
            if (input.getAttribute('type') !== 'submit') {
              input.value = '';
            }
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    }
  };

  try {
    if (!form) {
      throw new Error('Form not found');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.error(error.message);
  }
};
