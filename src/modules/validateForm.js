export const validateForm = (list) => {
  let success = true;

  const validationName = (input) => (input.value.trim().length >= 2 ? true : false);

  const validationPhone = (input) => (input.value.trim().length >= 16 ? true : false);

  list.forEach((input) => {
    if (
      (input.getAttribute('name') === 'fio' && !validationName(input)) ||
      (input.getAttribute('name') === 'tel' && !validationPhone(input))
    ) {
      success = false;
      input.classList.add('error');
    }
  });

  return success;
};
