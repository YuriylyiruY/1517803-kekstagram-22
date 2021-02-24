const PICTURES_NODE = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture'); // Находим фрагмент с содержимым темплейта

const renderPicture = (data) => {

  const element = templateFragment.content.cloneNode(true); // Клонируем элемент со всеми "внутренностями"

  const img = element.querySelector('.picture__img');
  const comments = element.querySelector('.picture__comments');
  const likes = element.querySelector('.picture__likes');

  img.setAttribute('src', data.url);
  comments.textContent = data.comment;
  likes.textContent = data.like;

  return element;
};
const renderPictures = (pictures) => {
  const fragmentBox = document.createDocumentFragment(); // Создаём "коробочку"
  pictures.forEach(element => {
    const picture = renderPicture(element);
    fragmentBox.appendChild(picture);
  });
  return fragmentBox;
}
const placePictures = (pictures) => {
  PICTURES_NODE.appendChild(renderPictures(pictures));
}

export {
  renderPictures,
  placePictures
};
