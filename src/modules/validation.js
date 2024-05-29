import { validateForm } from './validateForm';

export const validation = () => {
  const nameInputs = document.querySelectorAll('[name="fio"]'),
    telInputs = document.querySelectorAll('*[name="tel"]');

  const validation = ({ target }) =>
    target.classList.contains('error') && validateForm([target]) && target.classList.remove('error');

  const validationCyrillic = ({ target }) => {
    target.value = target.value.replace(/[^а-яА-я\-\s]/, '');
    validation({ target });
  };

  nameInputs.forEach((input) => input.addEventListener('input', validationCyrillic));
  telInputs.forEach((tel) => tel.addEventListener('input', validation));
};
