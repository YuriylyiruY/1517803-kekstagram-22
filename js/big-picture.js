const popup = document.querySelector('.big-picture');
const popupImg = popup.querySelector('.big-picture__img img');
const popupSocial = popup.querySelector('.big-picture__social');
const popupSocialHeader = popupSocial.querySelector('.social__header');
const popupSocialCaption = popupSocialHeader.querySelector('.social__caption');
const popupSocialLikes = popupSocialHeader.querySelector('.social__likes .likes-count');
const popupCommentsCount = popupSocial.querySelector('.social__comment-count .comments-count');
const popupSocialComments = popupSocial.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader ');
const commentLoader = document.querySelector('.social__comments-loader');
const socialCommentCount = document.querySelector('.social__comment-count');
const body = document.querySelector('body');
const popapCancel = document.querySelector('.big-picture__cancel');
const TemplateForOneComment = document.querySelector('#social__comment').content;

const getComment = (data) => {
  const element = TemplateForOneComment.querySelector('.social__comment').cloneNode(true);
  const img = element.querySelector('.social__picture');
  const text = element.querySelector('.social__text');
  img.setAttribute('src', data.avatar);
  img.setAttribute('alt', data.name);
  text.textContent = data.message;
  return element;
}

const getComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach(comment => {
    fragment.appendChild(getComment(comment));
  });
  return fragment;
}

const fillBigPic = (data) => {
  popupImg.setAttribute('src', data.url);
  popupImg.setAttribute('alt', data.description);
  popupSocialLikes.textContent = data.likes;
  popupSocialCaption.textContent = data.description;
  popupCommentsCount.textContent = data.comments.length;
  popupSocialComments.textContent = '';
  let MAX_QUANTITY_COMMENTS = 5;
  let MIN_QUANTITY_COMMENTS = 0;
  popupSocialComments.appendChild(getComments(data.comments.slice(MIN_QUANTITY_COMMENTS, MAX_QUANTITY_COMMENTS)));

  commentLoader.onclick = () => {
    popupSocialComments.textContent = '';
    MAX_QUANTITY_COMMENTS += 5;
    MIN_QUANTITY_COMMENTS += 5;
    popupSocialComments.appendChild(getComments(data.comments.slice(MIN_QUANTITY_COMMENTS, MAX_QUANTITY_COMMENTS)));
    if (MIN_QUANTITY_COMMENTS > data.comments.length) {
      commentLoader.classList.add('hidden');
    }
  }
}

const addComments = (data) => {
  if (data.comments.length > 5) {
    commentLoader.classList.remove('hidden');
  } else {
    commentLoader.classList.add('hidden');
  }
}

const closeHandler = () => {
  popup.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsLoader.classList.remove('hidden');
  socialCommentCount.classList.remove('hidden');
}

/**
 * Получает объект данных картинки и вызывает функцию заполнения его данными.
 * Показывает попап большой картинки, добавляю обработчик закрытия.
 * @param {*} data - приходит объект данных картинки  одной
 */

const openPopup = (data) => {
  fillBigPic(data); //добавили содержание в том числе коменты к большой картинке.
  popup.classList.remove('hidden');
  popapCancel.addEventListener('click', closeHandler);
  body.classList.add('modal-open');
  addComments(data);
  socialCommentCount.classList.add('hidden');
}

/**
 * Генератор обработчика вызова клика по превью.
 * На вход получает массив данных картинок, возращает обработчик вызова.
 * В обработчике данные доступны через замыкание.
 * Обработчик вычисляет id картинки, находит в массиве подходящий объект,
 * вызывает функцию отображения попап с этими данными.
 *
 * @param {*} pictures - массив объектов данных картинок.
 * @returns - обработчик клика по превью. Полная информация по картинке.
 */

const getObjectDataPic = pictures => (evt) => {
  if (evt.target.classList.contains('picture__img')) {
    const element = evt.target;
    const id = element.getAttribute('data-id'); // получили id картинки
    const photo = pictures.find(picture => picture.id === Number(id)); // получили объект данных картинки
    openPopup(photo);
  }
}

export {
  getObjectDataPic

};
