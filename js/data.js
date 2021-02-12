const STR = 'good';
const MAXLENGTH = 9;
const MIN = 15;
const MAX = 200;

import {
  getRandomBetween
} from './util.js';
import {
  checkStringLength
} from './util.js';
import {
  getOurComments
} from './util.js';

const createPhotos = (ArrLength) => {

  let Photos = [];
  for (let i = 1; i <= ArrLength; i++) {

    Photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: `user${i} say ${STR}`,
      likes: getRandomBetween(MIN, MAX),
      comments: getOurComments(i),
    })
  }

  return Photos;
}
const DATE_PHOTOS = createPhotos(25);
checkStringLength(STR, MAXLENGTH);

export {
  DATE_PHOTOS
};
