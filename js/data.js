import {
  getRandomBetween
} from './util.js';

const MIN = 15;
const MAX = 200;
const START_NUM_ID = 15;
const END_NUM_ID = 200;
const START_NUM_AVATAR = 1;
const END_NUM_AVATAR = 6;
const MESSAGE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!',
];
const NAMES =['Тор','Зевс','Локи','Один','Пасейдон','Аид'];
//========================================
const getMessageText = () => {

  const randArray = getRandomBetween(0, MESSAGE.length);

  return MESSAGE[randArray];
};
let messageText = getMessageText();

//========================================
const getName = () => {

  const randArray = getRandomBetween(0, NAMES.length);

  return NAMES[randArray];
};

//=========================================
const getComment = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomBetween(START_NUM_AVATAR, END_NUM_AVATAR)}.svg`,
  message: messageText,
  name: `user${id}`,
});

const getComments = (arrLength) => {
  const comments = [];
  for (let i = 0; i <= arrLength; i++) {
    comments.push(getComment(i));
  }
  return comments;
}
const COMMENTS = getComments(25);

//======================================
const createPhoto = (id) => ({
  url: `photos/${id}.jpg`,
  comment: getRandomBetween(MIN, MAX),
  like: getRandomBetween(START_NUM_ID, END_NUM_ID),
});

const getPhoto = (arrLength) => {
  const photos = [];
  for (let i = 1; i <= arrLength; i++) {
    photos.push(createPhoto(i));
  }
  return photos;
}



export {
  COMMENTS,
  getPhoto,getMessageText,getName
};
