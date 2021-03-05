import {
  PICTURES
} from './main.js';

//==========================================
const CONTAINER = document.querySelector('.pictures');
//выключатель==================
const POPUP = document.querySelector('.big-picture');
const POPUP_CANCEL = document.querySelector('.big-picture__cancel');
//==========================================

const openPopup = () => {
  POPUP.classList.remove('hidden');

  POPUP_CANCEL.addEventListener('click', () => {
    POPUP.classList.add('hidden');
  });
}
//=================================

const getClicker = (evt) => {



  if (evt.target.classList.contains('picture__img')) {
    const element = evt.target;
    const id = element.getAttribute('id')

    const TEMPLATE_BIG_PICTURE = document.querySelector('.big-picture__img img');
    TEMPLATE_BIG_PICTURE.setAttribute('src', element.src);

    const IMG_TEMPLATE_COMMENT = document.querySelector('.comments-count');
    IMG_TEMPLATE_COMMENT.textContent = PICTURES[id - 1].comments_count;

    const IMG_TEMPLATE_LIKE = document.querySelector('.social__likes .likes-count');
    IMG_TEMPLATE_LIKE.textContent = PICTURES[id - 1].likes_count;

    const TEMPLATE_AVATAR = document.querySelector('.social__header .social__picture');
    TEMPLATE_AVATAR.setAttribute('src', PICTURES[id - 1].avatar);
    // podelement==================
    // const TEMPLATE_AVATAR_PODELEMENT = document.querySelector('.social__comment .social__picture');
    // TEMPLATE_AVATAR_PODELEMENT.setAttribute('src', PICTURES[id - 1].avatar);

  }

}




CONTAINER.addEventListener('click', openPopup);



















export {
  getClicker
};








//=======================при клике по картинке вызвать большую картинку
