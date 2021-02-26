
import {
  getRandomBetween,
  getRandomValue,
  getRandomTextFromArr
} from './util.js';
import {
  getPhotos
} from './data.js';
import {
  placePictures
} from './picture.js';

const PICTURE_COUNT = 25;
const PICTURES = getPhotos(PICTURE_COUNT);
placePictures(PICTURES);
const START_NUM_AVATAR = 1;
const END_NUM_AVATAR = 6;
const MESSAGE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!',
];
const NAMES = ['Тор', 'Зевс', 'Локи', 'Один', 'Посейдон', 'Аид'];

//==========================================
//массив фотографий
const getPictures = (elements) => {
  const arrPhotos = [];
  for (let i = 0; i <= elements; i++) {
    arrPhotos.push(`photos/${i}.jpg`);
  }
  return arrPhotos;
}

//=============================================
const PHOTOS = document.querySelector('.pictures');
//==========================================
//выключатель
const BIGPICTURE = document.querySelector('.big-picture');
PHOTOS.addEventListener('click', () => {
  BIGPICTURE.classList.remove('hidden');
});
const bigPictureCancel = document.querySelector('.big-picture__cancel');
bigPictureCancel.addEventListener('click', () => {
  BIGPICTURE.classList.add('hidden');
});
//===========================================
const massPhotos = getPictures(PICTURE_COUNT);


const PIC = document.querySelectorAll('.picture');
const PICTURES_IMG = document.querySelector('.big-picture__img img');

const onAddClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', function () {

    PICTURES_IMG.setAttribute('src', photo);
  });
};
for (let i = 1; i < PICTURE_COUNT + 1; i++) {
  onAddClickHandler(PIC[i - 1], massPhotos[i]);
}

//==============================================

//кликер переход данных от маленькой к большой картинке

let onAddClick = function (thumbnail, data, comment, user, text, avatar, lastAvatar) {
  thumbnail.addEventListener('click', function () {
    const IMG_TEMPLATE_COMMENT = document.querySelector('.social__comment-count .comments-count');
    const IMG_TEMPLATE_LIKE = document.querySelector('.social__likes .likes-count');
    const TEMPLATE_TEXT = document.querySelector('.social__text');
    const TEMPLATE_DESCRAPTION = document.querySelector('.social__caption');
    const TEMPLATE_AVATAR = document.querySelectorAll('.social__picture');
    IMG_TEMPLATE_LIKE.textContent = data;
    IMG_TEMPLATE_COMMENT.textContent = comment;
    TEMPLATE_DESCRAPTION.textContent = user;
    TEMPLATE_TEXT.textContent = text;
    TEMPLATE_AVATAR[0].setAttribute('src', avatar);
    TEMPLATE_AVATAR[1].setAttribute('src', lastAvatar);
  });
};

for (let j = 1; j <= PICTURE_COUNT; j++) {
  onAddClick(PIC[j - 1], PICTURES[j - 1].like, PICTURES[j - 1].comment, getRandomValue(NAMES), getRandomTextFromArr(MESSAGE), PICTURES[`${getRandomBetween(START_NUM_AVATAR, END_NUM_AVATAR)}`].avatar, PICTURES[`${getRandomBetween(START_NUM_AVATAR, END_NUM_AVATAR)}`].avatar)
}


//выключатель modale-open
//==================================================
const MODAL_OPEN = document.querySelector('body');

PIC.addEventListener('click', () => {
  MODAL_OPEN.classList.add('modal-open');
});

bigPictureCancel.addEventListener('click', () => {
  MODAL_OPEN.classList.remove('modal-open');
});
export {
  getPictures,
  onAddClick
};
