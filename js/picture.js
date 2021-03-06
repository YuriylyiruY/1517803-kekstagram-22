import {
  getClickHandler
} from './bigPictures.js';

const PICTURES_NODE = document.querySelector('.pictures');
const TEMPLATE_FRAGMENT = document.querySelector('#picture'); // Находим фрагмент с содержимым темплейта

/**
 * заполняется разметка маленькой картинки
 * @param {*} data - массив объектов, со вложенными коментами
 * @returns фрагмент .picture с значениями
 */
const renderPicture = (data) => {

  const element = TEMPLATE_FRAGMENT.content.cloneNode(true); // Клонируем элемент со всеми "внутренностями"
  const img = element.querySelector('.picture__img');
  const commentQuantity = element.querySelector('.picture__comments');
  const likes = element.querySelector('.picture__likes');

  img.setAttribute('src', data.url);
  img.setAttribute('data-id', data.id);
  likes.textContent = data.likes;
  commentQuantity.textContent = data.comments.length;

  return element;
};

/**  Фрагменты которые приходят путем вызова функции renderPicture заполняются в коробочку
 *
 * @param {*} pictures
 * @returns возращает набор фрагментов
 */
const renderPictures = (pictures) => {
  const fragmentBox = document.createDocumentFragment(); // Создаём "коробочку"
  pictures.forEach(data => {
    const picture = renderPicture(data);
    fragmentBox.appendChild(picture);
  });
  return fragmentBox;

}

const removeChildren = (parent, selector) => {
  const children = parent.querySelectorAll(selector);
  children.forEach(child => parent.removeChild(child));
}


/** Удаляет прежнее содержание, картинки, лайки, коменты с помощью removeChildren
 *  Коробочку вставляет в DOM более точно в .pictures
 * Срабатывает при клике по картинке, где передает данные  (аналог data, DATA из майн ) по месту вызова
 *
 * @param {*} pictures массив объектов (аналог data, DATA из майн )
 */
const placePictures = (pictures) => {
  removeChildren(PICTURES_NODE, '.picture');
  PICTURES_NODE.appendChild(renderPictures(pictures));
  PICTURES_NODE.addEventListener('click', getClickHandler(pictures));
}

export {
  renderPictures,
  placePictures
};
