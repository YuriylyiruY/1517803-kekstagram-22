const PICTURES_NODE = document.querySelector('.pictures');
const SOCIAL_COMMENTS = document.querySelector('.social__comments');
const TEMPLATE_FRAGMENT = document.querySelector('#picture'); // Находим фрагмент с содержимым темплейта
const TEMPLATE_COMMENTS = document.querySelector('#social__comment');

const renderPictureComments = (data) => {
  // element comments=========
  const podElement = TEMPLATE_COMMENTS.content.cloneNode(true);
  const imgAvatar = podElement.querySelector('.social__picture');
  imgAvatar.setAttribute('src', data.avatar);
  imgAvatar.setAttribute('alt', data.name);
  const textAvatar = podElement.querySelector('.social__text');
  textAvatar.textContent = data.message;
  return podElement;
};
const renderPicture = (data) => {

  const element = TEMPLATE_FRAGMENT.content.cloneNode(true); // Клонируем элемент со всеми "внутренностями"
  const img = element.querySelector('.picture__img');
  const commentQuantity = element.querySelector('.picture__comments');
  const likes = element.querySelector('.picture__likes');
  img.setAttribute('src', data.url);
  img.setAttribute('id', data.id);
  likes.textContent = data.likes_count;
  commentQuantity.textContent = data.comments_count;


  /*
  <li class="social__comment">
    <img
        class="social__picture"
        src="{{аватар}}"
        alt="{{имя комментатора}}"
        width="35" height="35">
    <p class="social__text">{{текст комментария}}</p>
</li> */
  return element;
};
const renderPicturesComments = (pictures) => {
  const fragmentBoxComments = document.createDocumentFragment(); // Создаём "коробочку"
  pictures.forEach(data => {

    const comment = renderPictureComments(data);

    fragmentBoxComments.appendChild(comment);
  });

  return fragmentBoxComments;
}

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
const placePicturesComments = (pictures) => {
  removeChildren(SOCIAL_COMMENTS, '.social__comment');
  SOCIAL_COMMENTS.appendChild(renderPicturesComments(pictures));
}
const placePictures = (pictures) => {
  removeChildren(PICTURES_NODE, '.picture');
  PICTURES_NODE.appendChild(renderPictures(pictures));
}

export {
  renderPictures,
  renderPicturesComments,
  placePictures,
  placePicturesComments
};
