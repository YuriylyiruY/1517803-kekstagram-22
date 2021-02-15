import {DATEPHOTOS} from './data.js';

const pool = document.querySelector('.pictures');

const templateFragment = document.querySelector('#picture').content; // Находим фрагмент с содержимым темплейта
const template = templateFragment.querySelector('a');
const fragmentBox = document.createDocumentFragment(); // Создаём "коробочку"
const getUrlFunk = (i) => DATEPHOTOS[i].url;
const getCommentsFunk = (i) => DATEPHOTOS[i].comments;
const getLikesFunk = (i) => DATEPHOTOS[i].likes;

for (let i = 0; i < DATEPHOTOS.length; i++) {
  const element = template.cloneNode(true); // Клонируем элемент со всеми "внутренностями"
  element.innerHTML = `<img src="${getUrlFunk(i)}" width="182" height="182"><p class="picture__info"><span class="picture__comments">${getCommentsFunk(i)}</span><span class="picture__likes">${getLikesFunk(i)}</span></p>`;
  fragmentBox.appendChild(element);
}
pool.appendChild(fragmentBox);



let portToMain = pool.children;
export {
  portToMain
};
