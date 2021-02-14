import {
  DATEPHOTOS
}
from './data.js';
const pool = document.querySelector('.pictures');

const templateFragment = document.querySelector('#picture').content; // Находим фрагмент с содержимым темплейта
const likes = templateFragment.querySelector('.picture__likes'); // В фрагменте находим нужный элемент
const fragment = document.createDocumentFragment(); // Создаём "коробочку"
const comment = templateFragment.querySelector('.picture__comments'); // В фрагменте находим нужный элемент
const fragment1 = document.createDocumentFragment(); // Создаём "коробочку"
for (let i = 0; i < DATEPHOTOS.length-1; i++) {
  const elementLikes = likes.cloneNode(true); // Клонируем элемент со всеми "внутренностями"

  const elementComments = comment.cloneNode(true);// Клонируем элемент со всеми "внутренностями"
  //elementLikes.innerHTML = i;
  //newElement.classList.add('el');
  //elementComments.textContent = i;
  fragment.appendChild(elementLikes);
  fragment1.appendChild(elementComments);

}

pool.appendChild(fragment);
pool.appendChild(fragment1);

let b = console.log(pool.children);
export{b};
// parentDiv.appendChild(fragment);
// console.log(parentDiv.children);
