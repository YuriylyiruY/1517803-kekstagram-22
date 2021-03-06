const POPUP = document.querySelector('.big-picture');
const POPUP_IMG = POPUP.querySelector('.big-picture__img img');
const POPUP_SOCIAL = POPUP.querySelector('.big-picture__social');
const POPUP_SOCIAL_HEADER = POPUP_SOCIAL.querySelector('.social__header');
const POPUP_SOCIAL_PICTURE = POPUP_SOCIAL_HEADER.querySelector('.social__picture');
const POPUP_SOCIAL_CAPTION = POPUP_SOCIAL_HEADER.querySelector('.social__caption');
const POPUP_SOCIAL_LIKES = POPUP_SOCIAL_HEADER.querySelector('.social__likes .likes-count');
const POPUP_COMMENS_COUNT = POPUP_SOCIAL.querySelector('.social__comment-count .comments-count');
const POPUP_SOCIAL_COMMENTS = POPUP_SOCIAL.querySelector('.social__comments');

const POPUP_CANCEL = document.querySelector('.big-picture__cancel');
const TEMPLATE_COMMENT = document.querySelector('#social__comment').content;

/**
 * заполняем данными темплет для одного комента пользователя
 *
 * @param {*} data
 * @returns возращаем заполненный темплет
 */

const getComment = (data) => {
  const element = TEMPLATE_COMMENT.querySelector('.social__comment').cloneNode(true);
  const img = element.querySelector('.social__picture');
  const text = element.querySelector('.social__text');

  img.setAttribute('src', data.avatar);
  img.setAttribute('alt', data.name);
  text.textContent = data.message;

  return element;
}

/**заполняет темлеты в коробочку
 *
 * @param {*} comments
 * @returns возращает коробочку
 */

const getComments = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach(comment => {
    fragment.appendChild(getComment(comment));
  });

  return fragment;
}

/**
 * Заполняется разметка большой картинки  в том числе комментарии.
 * @param {*} data - объект данных картинки
 */

const fillBigPic = (data) => {
  POPUP_IMG.setAttribute('src', data.url);
  POPUP_IMG.setAttribute('alt', data.description);
  POPUP_SOCIAL_LIKES.textContent = data.likes;
  POPUP_SOCIAL_CAPTION.textContent = data.author.message;
  POPUP_SOCIAL_PICTURE.setAttribute('src', data.author.avatar);
  POPUP_SOCIAL_PICTURE.setAttribute('alt', data.author.name);
  POPUP_COMMENS_COUNT.textContent = data.comments.length;
  POPUP_SOCIAL_COMMENTS.textContent = '';
  POPUP_SOCIAL_COMMENTS.appendChild(getComments(data.comments)); // добавляем в DOM темлеты коментов

}

const closeHandler = () => {
  POPUP.classList.add('hidden');
}

/**
 * Получает объект данных картинки и вызывает функцию заполнения его данными.
 * Показывает попап большой картинки, добавляю обработчик закрытия.
 * @param {*} data - приходит объект данных картинки  одной
 */

const openPopup = (data) => {
  fillBigPic(data); //добавили содержание в том числе коменты к большой картинке.
  POPUP.classList.remove('hidden');
  POPUP_CANCEL.addEventListener('click', closeHandler);
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

const getClickHandler = pictures => (evt) => {

  if (evt.target.classList.contains('picture__img')) {
    const element = evt.target;
    const id = element.getAttribute('data-id'); // получили id картинки
    const photo = pictures.find(picture => picture.id === Number(id)); // получили объект данных картинки

    openPopup(photo);
  }

}

export {
  getClickHandler
};
