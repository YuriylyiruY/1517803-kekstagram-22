import {
  getRandomBetween,
  getRandomTextFromArr
} from './util.js';

const MIN_USERS = 1000;
const MAX_USERS = 10000;
const START_NUM_ID = 15;
const END_NUM_ID = 200;
const START_NUM_AVATAR = 1;
const END_NUM_AVATAR = 6;
const messages = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!',
];

/**
 * создает содержимое одного коментария от одного пользователя
 * @param {*} id - id пользователя указаное в параметрах MIN_USERS, MAX_USERS
 * @returns
 */

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomBetween(START_NUM_AVATAR, END_NUM_AVATAR)}.svg`,
  messages: getRandomTextFromArr(messages).join(''),
  name: `user${id}`,
});

/**
 * упаковывает по одному комментарию в массив коментариев
 * @param {*} count - количество коментов которые будут в массиве берется из main
 * @returns
 */

const getComments = (count) => {
  const comments = [];
  for (let i = 1; i <= count; i++) {
    comments.push(createComment(getRandomBetween(MIN_USERS, MAX_USERS)));
  }
  return comments;
}

/**
 * создает содержимое для одного фото и вытаскивает из массива комментариев нужное число комментариев
 * @param {*} id
 * @returns
 */

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  likes: getRandomBetween(START_NUM_ID, END_NUM_ID),
  comments: getComments(getRandomBetween(2, 5)),
  description: createComment(id),
});

/**
 * создает массив  фотографий уже с содержимым
 * @param {*} count
 * @returns
 */

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
