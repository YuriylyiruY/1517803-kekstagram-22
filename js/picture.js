import {
  DATEPHOTOS
} from './data.js';

const PICTURES_NODE = document.querySelector('.pictures');
const PICTURE_COUNT = 25;

const templateFragment = document.querySelector('#picture'); // Находим фрагмент с содержимым темплейта


const renderPicture = (data) => {

  const element = templateFragment.content.cloneNode(true); // Клонируем элемент со всеми "внутренностями"

  const img = element.querySelector('.picture__img');
  const comments = element.querySelector('.picture__comments');
  const likes = element.querySelector('.picture__likes');

  img.setAttribute('src',DATEPHOTOS[data].url);
  comments.textContent = DATEPHOTOS[data].comment;
  likes.textContent = DATEPHOTOS[data].like;

  return element;
};

const renderPictures = () => {
  const fragmentBox = document.createDocumentFragment(); // Создаём "коробочку"

  for (let i = 1; i <= PICTURE_COUNT; i++) {
    const element = renderPicture(i);
    fragmentBox.appendChild(element);
  }
  return fragmentBox;
}

const placePictures = () => {
  PICTURES_NODE.appendChild(renderPictures());
}
placePictures();
const portToMain = PICTURES_NODE.children;
export {
  portToMain
};
