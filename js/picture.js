import {
  getObjectDataPic

} from './bigPicture.js';

const pictureNode = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture'); // Находим фрагмент с содержимым темплейта

const imgFilterContainer = document.querySelector('.img-filters');
const imgFilterForm = imgFilterContainer.querySelector('.img-filters__form');
const filterDefault = imgFilterForm.querySelector('#filter-default');
const filterRandom = imgFilterForm.querySelector('#filter-random');
const filterDiscussed = imgFilterForm.querySelector('#filter-discussed');
imgFilterContainer.classList.remove('img-filters--inactive');



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
  filterDiscussed.onclick = () => {
    commentQuantity.textContent = data.comments.length.sort(function (a, b) {
      return a - b;
    });

  }

  return element;
};



const renderPictures = (pictures) => {

  const fragmentBox = document.createDocumentFragment(); // Создаём "коробочку"
  pictures.forEach(data => {
    const picture = renderPicture(data);
    console.log(data.comments);
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
  console.log(pictures);

  removeChildren(pictureNode, '.picture');
  pictureNode.appendChild(renderPictures(pictures));


  const ObjectDataPicture = getObjectDataPic(pictures);
  pictureNode.addEventListener('click', ObjectDataPicture);
}

export {
  renderPictures,
  placePictures
};
