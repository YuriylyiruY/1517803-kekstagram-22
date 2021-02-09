const getRandomBetween = function (fromNum, toNum) {

  if (isNaN(toNum) || isNaN(fromNum) || Array.isArray(toNum) || Array.isArray(fromNum) || fromNum < 0 || toNum < 0) {
    throw new Error('Передано неверное значение.');
  }

  if (fromNum > toNum) {
    let max = fromNum;
    let min = toNum;
    let rand = (Math.random() * (max + 1 - min) + min);
    return Math.floor(rand);
  }
  let rand = (Math.random() * (toNum + 1 - fromNum) + fromNum);
  return Math.floor(rand);

}

//task 2
const checkStringLength = function (STR, MAXLENGTH) {
  if (STR.length <= MAXLENGTH) {
    return true;
  }

}

const getMessageText = () => {
  const MESSAGE = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'В целом всё неплохо. Но не всё.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];
  const randArray = getRandomBetween(0, MESSAGE.length - 1);
  return (MESSAGE[randArray]);
};

const ourComments = (i) => {
  'use strict';
  const getComment = {
    id: getRandomBetween(15, 200),
    avatar: `img/avatar-${getRandomBetween(1, 6)}.jpg`,
    message: getMessageText(),
    name: `user${i}`,
  }

  return (Object.entries(getComment)
    .map(([key, value]) => key + ' — ' + value)
    .join(', '));
}


const STR = 'good';
const MAXLENGTH = 9;
checkStringLength(STR,MAXLENGTH);
const MIN = 15;
const MAX = 200;

const createPhotos = () => {
  const Photos = [];
  let ArrLength = 25;
  for (let i = 1; i <= ArrLength; i++) {

    Photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: `user${i} say ${STR}`,
      likes: getRandomBetween(MIN, MAX),
      comments: ourComments(i),
    })
  }
  for (let j = 0; j < ArrLength; j++) {
    return (Photos[j]);
  }
}

createPhotos();
