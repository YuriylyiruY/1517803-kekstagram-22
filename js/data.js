import {
  getRandomBetween,
  getRandomTextFromArr
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

const createPhoto = (id) => ({
  url: `photos/${id}.jpg`,
  comments_count: getRandomBetween(MIN, MAX),
  likes_count: getRandomBetween(START_NUM_ID, END_NUM_ID),
  id: id,
  avatar: `img/avatar-${getRandomBetween(START_NUM_AVATAR, END_NUM_AVATAR)}.svg`,
  message:getRandomTextFromArr(MESSAGE).join(''),
  name: `user${id}`,
  descraption: `user${id} say it is a cool photo`,

});

const getPhotos = (count) => {
  const photos = [];
  for (let i = 1; i <= count; i++) {
    photos.push(createPhoto(i));
  }
  return photos;
}

export {
  getPhotos
};
