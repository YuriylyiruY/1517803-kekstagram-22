// import {
//   DATEPHOTOS,
//   messageText
// } from './data.js';

// import {
//   getRandomBetween
// } from './util.js';

// import {
//   COMMENTS
// } from './data.js';

// const START_NUM_AVATAR = 1;
// const END_NUM_AVATAR = 6;

// const userPhoto = document.querySelectorAll('.picture');
// const userBigPhoto = document.querySelector('.big-picture');
// const cancelBigPhoto = document.querySelector('.big-picture__cancel');
// const templateFragment = document.querySelector('#picture').content;
// const template = templateFragment.querySelectorAll('a');
// const fragmentBox = document.createDocumentFragment();

// console.log(Array.from(userPhoto));
// console.log(Array.from(template));
// const ad = function (userPhoto, photo) {
//   userPhoto.addEventListener('click', function () {
//     userBigPhoto.src = photo;
//     if (userBigPhoto.classList.contains('hidden')) {
//       userBigPhoto.classList.remove('hidden');
//     } else {
//       userBigPhoto.classList.add('hidden');
//     }

//   });
//   cancelBigPhoto.addEventListener('click', function () {
//     if (userBigPhoto.classList.contains('hidden')) {
//       userBigPhoto.classList.remove('hidden');
//     } else {
//       userBigPhoto.classList.add('hidden');
//     }

//   });

// }

// // for (var i = 0; i < userPhoto.length; i++) {
// //   addThumbnailClickHandler(userPhoto[1], bigPicture[1]);
// // }

// export {
//   userBigPhoto
// };


// //const getUrlFunc = y;
// const bigPicture = document.querySelector('.big-picture__img');
// bigPicture.innerHTML = `<img src="photos/${2}.jpg" width="600" height="600">`;
// // const bigLikes = document.querySelector('.social__likes');
// // bigLikes.innerHTML = '<span class ="likes-count">2222</span>';
// // const bigComment = document.querySelector('.social__comment-count');
// // bigComment.innerHTML = '5 из <span class ="comments-count">2222</span> комментариев';
// // const bigSocialComment = document.querySelector('.social__comment');
// // bigSocialComment.innerHTML = `<img
// //         class="social__picture"
// //         src="img/avatar-${getRandomBetween(START_NUM_AVATAR, END_NUM_AVATAR)}.svg"
// //         alt="${COMMENTS.name}"
// //         width="35" height="35">
// //         <p class="social__text">${COMMENTS.message}</p>`;
// let portBigPhotoToMain = bigPicture;
// export {
//   portBigPhotoToMain
// };
