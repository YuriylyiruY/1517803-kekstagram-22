const randomNum = function (fromNum, toNum) {

  if (isNaN(toNum) || isNaN(fromNum) || Array.isArray(toNum) || Array.isArray(fromNum) || fromNum < 0 || toNum < 0) {
    throw new Error('Передано неверное значение.');
  }

  if (fromNum > toNum) {
    let between = fromNum;
    fromNum = toNum;
    toNum = between;
  }
  let rand = +(Math.random() * (toNum + 1 - fromNum) + fromNum);
  return Math.floor(rand);

}

//task 2
const strLength = function (str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }

}

//const comments = [];
const ourComments = (i) => {

  const comm = {
    id: randomNum(15, 200),
    avatar: `img/avatar-${randomNum(1, 6)}.jpg`,
    message: mess(),
    name: `user${i}`,
  }

  return (Object.entries(comm)
    .map(([key, value]) => key + ' — ' + value)
    .join(', '));
}



const mess = () => {

  let message = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'В целом всё неплохо. Но не всё.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];
  const randArray = randomNum(0, message.length - 1);
  return (message[randArray]);
};


const twentyFivePhotos = [];
let str = 'good';
let maxLength = 9;
const min = 15;
const max = 200;
strLength(str, maxLength);
const createTwentyFivePhotos = () => {
  if (twentyFivePhotos.length == 0) {
    for (let i = 1; i <= 25; i++) {
      twentyFivePhotos.push({
        id: i,
        url: `photos/${i}.jpg`,
        description: `user${i} say ${str}`,
        likes: randomNum(min, max),
        comments: ourComments(i),
      })
    }

  }
}
createTwentyFivePhotos();

const useTwentyFivePhotos = () => {
  for (let j = 0; j < 25; j++) {
    return (twentyFivePhotos[j]);
  }
}
useTwentyFivePhotos();

// twentyFivePhotos.forEach((wizard) => console.log(`${wizard.id},
// ${wizard.url}, ${wizard.description},${wizard.likes},${wizard.comments}`));
