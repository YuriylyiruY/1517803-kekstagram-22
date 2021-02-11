'use strict';
const START_NUM_ID = 15;
const END_NUM_ID = 200;
const START_NUM_AVATAR = 1;
const END_NUM_AVATAR = 6;
const STR = 'good';
const MAXLENGTH = 9;
const MIN = 15;
const MAX = 200;
const ARRLENGTH = 25;
const MESSAGE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomBetween = function (fromNum, toNum) {

  if (isNaN(toNum) || isNaN(fromNum) || Array.isArray(toNum) || Array.isArray(fromNum) || fromNum < 0 || toNum < 0) {
    throw new Error('Передано неверное значение.');
  }

  let max = fromNum;
  let min = toNum;
  if (fromNum > toNum) {
    [min, max] = [max, min];
  }
  return Math.floor((Math.random() * (max + 1 - min) + min));
}

//task 2
const checkStringLength = function (STR, MAXLENGTH) {
  return (STR.length <= MAXLENGTH);
}


const getMessageText = () => {

  const randArray = getRandomBetween(0, MESSAGE.length - 1);
  return (MESSAGE[randArray]);
};

const getOurComments = (i) => {
  return {
    id: getRandomBetween(START_NUM_ID, END_NUM_ID),
    avatar: `img/avatar-${getRandomBetween(START_NUM_AVATAR, END_NUM_AVATAR)}.jpg`,
    message: getMessageText(),
    name: `user${i}`,
  }
}

const createPhotos = () => {

  const PHOTOS = [];
  for (let i = 1; i <= ARRLENGTH; i++) {

    PHOTOS.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: `user${i} say ${STR}`,
      likes: getRandomBetween(MIN, MAX),
      comments: getOurComments(i),
    })
  }

  return PHOTOS;
}

checkStringLength(STR, MAXLENGTH);
createPhotos();
