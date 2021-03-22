const main = document.querySelector('main');
const templateError = document.querySelector('#error').content;
const templateSuccess = document.querySelector('#success').content;
const fragment = document.createDocumentFragment();
const successTemplate = templateSuccess.querySelector('.success');
const elementSuccess = successTemplate.cloneNode(true);
const succesInner = elementSuccess.querySelector('.success__inner');
const successTitle = succesInner.querySelector('.success__title');
const successButton = succesInner.querySelector('.success__button');
const fragmentError = document.createDocumentFragment();
const errorTemplate = templateError.querySelector('.error');
const elementError = errorTemplate.cloneNode(true);
const errorInner = elementError.querySelector('.error__inner');
const errorTitle = errorInner.querySelector('.error__title');
const errorButton = errorInner.querySelector('.error__button');

successButton.addEventListener('click', function () {
  elementSuccess.remove();
});

document.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('success__inner') || evt.target.classList.contains('success__title')) {
    evt.preventDefault();
  } else {
    elementSuccess.remove();
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    elementSuccess.remove();
  }
});

const getPass = () => {
  successTitle.textContent = 'Hello World!';
  successButton.textContent = 'Its Ok!';
  fragment.appendChild(elementSuccess);
  main.appendChild(fragment);
}

const getWarning = () => {
  errorTitle.textContent = 'Hello World!';
  errorButton.textContent = 'Its Not Ok!';
  fragmentError.appendChild(elementError);
  main.appendChild(fragmentError);
}

errorButton.addEventListener('click', function () {
  elementError.remove();
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    elementError.remove();
  }
});

document.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('error__inner') || evt.target.classList.contains('error__title')) {
    evt.preventDefault();
  } else {
    elementError.remove();
  }
});

export {
  getWarning,
  getPass
};
