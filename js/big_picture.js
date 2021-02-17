import {
  DATEPHOTOS,
  messageText
} from './data.js';

import {getRandomBetween} from './util.js';

import {
  getComments
} from './data.js';

const START_NUM_AVATAR = 1;
const END_NUM_AVATAR = 6;
const userPhoto = document.querySelector('.picture');
const userBigPhoto = document.querySelector('.big-picture');
const cancelBigPhoto = document.querySelector('.big-picture__cancel');
userPhoto.addEventListener('click', function () {
  if (userBigPhoto.classList.contains('hidden')) {
    userBigPhoto.classList.remove('hidden');
  } else {
    userBigPhoto.classList.add('hidden');
  }

});
cancelBigPhoto.addEventListener('click', function () {
  if (userBigPhoto.classList.contains('hidden')) {
    userBigPhoto.classList.remove('hidden');
  } else {
    userBigPhoto.classList.add('hidden');
  }

});
export {
  userBigPhoto
};
const getUrlFunc = (i) => DATEPHOTOS[i].url;
const bigPicture = document.querySelector('.big-picture__img');
bigPicture.innerHTML = `<img src="photos/${getUrlFunc(2)}.jpg" width="600" height="600">`;
const bigLikes = document.querySelector('.social__likes');
bigLikes.innerHTML = '<span class ="likes-count">2222</span>';
const bigComment = document.querySelector('.social__comment-count');
bigComment.innerHTML = '5 из <span class ="comments-count">2222</span> комментариев';
const bigSocialComment = document.querySelector('.social__comment');
bigSocialComment.innerHTML = `<img
        class="social__picture"
        src="img/avatar-${getRandomBetween(START_NUM_AVATAR, END_NUM_AVATAR)}.svg"
        alt="${getComments.name}"
        width="35" height="35">
        <p class="social__text">${messageText}</p>`;
let portBigPhotoToMain = bigPicture;
export {
  portBigPhotoToMain
};
