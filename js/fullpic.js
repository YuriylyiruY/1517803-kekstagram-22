import {
  portToMain
} from './picture.js';
import {
  DATEPHOTOS,
  COMMENTS
} from './data.js';
import {
  getRandomBetween
} from './util.js';

const START_NUM_AVATAR = 1;
const END_NUM_AVATAR = 6;
const MESSAGE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!',
];

const getUser = getRandomBetween(1, DATEPHOTOS.length);

//создаю класс
const template = document.querySelector('.big-picture__img');
const imgTempl = template.children;
imgTempl[0].classList.add('pic');

//массив фотографий
const getPhotos = (elements) => {
  const arrPhoto = [];
  for (let i = 2; i <= elements; i++) {
    arrPhoto.push(portToMain[i].children[0].src);
  }
  return arrPhoto;
}
let massPhoto = getPhotos(26);

let picPhoto = document.querySelector('.pictures');
let fullPhotos = document.querySelector('.big-picture');
let fullPhotosExit = document.querySelector('.big-picture__cancel');

let picPhotos = document.querySelectorAll('.picture');
let fullPhoto = document.querySelector('.pic');

//выключатель
picPhoto.addEventListener('click', () => {
  fullPhotos.classList.remove('hidden');
});

fullPhotosExit.addEventListener('click', () => {
  fullPhotos.classList.add('hidden');
});

let addClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', function () {
    fullPhoto.src = photo;
  });
};
for (let i = 0; i < massPhoto.length; i++) {
  addClickHandler(picPhotos[i], massPhoto[i]);
}

//коментарии
const templateComment = document.querySelector('.social__comment-count');
const imgTemplComment = templateComment.children;

//лайки
const templateLikes = document.querySelector('.social__likes');
const imgTemplLikes = templateLikes.children;


//аватар
const templateAvatar = document.querySelectorAll('.social__picture');
//const templateAvatar1 = document.querySelector('.social__picture');

//Имя коментатора
const templateComentator = document.querySelector('.social__picture');
templateComentator.textContent = COMMENTS[`${getUser}`].name;

//текст коментария
const templateText = document.querySelector('.social__text');

//описание фото
const templateDescraption = document.querySelector('.social__caption');

//кликер переход данных от маленькой к большой картинке
let addClickHandle = function (thumbnail, data, comment,user,text,avatar,avatarLast) {
  thumbnail.addEventListener('click', function () {
    imgTemplLikes[0].textContent = data;
    imgTemplComment[0].textContent = comment;
    templateDescraption.textContent =user;
    templateText.textContent = text;
    templateAvatar[0].src = avatar;
    templateAvatar[1].src = avatarLast;
  });
};

for (let j = 1; j <= DATEPHOTOS.length; j++) {
  addClickHandle(picPhotos[j - 1],DATEPHOTOS[j].picture__likes,DATEPHOTOS[j].picture__comment,
    `Круто ${getRandomBetween(1, DATEPHOTOS.length)} баллов`,MESSAGE[`${getRandomBetween(1, MESSAGE.length)}`], COMMENTS[`${getRandomBetween(START_NUM_AVATAR, END_NUM_AVATAR)}`].avatar,COMMENTS[`${getRandomBetween(START_NUM_AVATAR, END_NUM_AVATAR)}`].avatar);
}

//выключатель modale-open

let modalOpen = document.querySelector('body');

picPhoto.addEventListener('click', () => {
  modalOpen.classList.add('modal-open');
});

fullPhotosExit.addEventListener('click', () => {
  modalOpen.classList.remove('modal-open');
});
export {
  massPhoto,
  picPhoto
};