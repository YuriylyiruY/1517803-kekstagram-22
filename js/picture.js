import {
  getObjectDataPic

} from './big-picture.js';

const imgFiltersButtonDefault = document.querySelector('.img-filters__button#filter-default');
const imgFiltersButtonRandom = document.querySelector('.img-filters__button#filter-random');
const imgFiltersButtonDiscussed = document.querySelector('.img-filters__button#filter-discussed');
const pictureNode = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture'); // Находим фрагмент с содержимым темплейта

/**
 * заполняется разметка маленькой картинки
 * @param {*} data - объект, со вложенными коментами
 * @returns фрагмент .picture с значениями
 */

const renderPicture = (data) => {
  const element = templateFragment.content.cloneNode(true); // Клонируем элемент со всеми "внутренностями"
  const img = element.querySelector('.picture__img');
  const commentQuantity = element.querySelector('.picture__comments');
  const likes = element.querySelector('.picture__likes');
  img.setAttribute('src', data.url);
  img.setAttribute('data-id', data.id);
  likes.textContent = data.likes;
  commentQuantity.textContent = data.comments.length;
  return element;
};

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
  removeChildren(pictureNode, '.picture');
  pictureNode.appendChild(renderPictures(pictures));
  const ObjectDataPicture = getObjectDataPic(pictures);
  pictureNode.addEventListener('click', ObjectDataPicture);
}

imgFiltersButtonRandom.addEventListener('click', function () {
  imgFiltersButtonDiscussed.classList.remove('img-filters__button--active');
  imgFiltersButtonDefault.classList.remove('img-filters__button--active');
  imgFiltersButtonRandom.classList.add('img-filters__button--active');
});
imgFiltersButtonDefault.addEventListener('click', function () {
  imgFiltersButtonDiscussed.classList.remove('img-filters__button--active');
  imgFiltersButtonRandom.classList.remove('img-filters__button--active');
  imgFiltersButtonDefault.classList.add('img-filters__button--active');
});
imgFiltersButtonDiscussed.addEventListener('click', function () {
  imgFiltersButtonDefault.classList.remove('img-filters__button--active');
  imgFiltersButtonRandom.classList.remove('img-filters__button--active');
  imgFiltersButtonDiscussed.classList.add('img-filters__button--active');
});

export {
  renderPictures,
  placePictures
};
