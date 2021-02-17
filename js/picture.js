import {
  DATEPHOTOS
} from './data.js';

const pool = document.querySelector('.pictures');

const templateFragment = document.querySelector('#picture').content; // Находим фрагмент с содержимым темплейта
const template = templateFragment.querySelector('a');
const fragmentBox = document.createDocumentFragment(); // Создаём "коробочку"
function getFetch() {
  const getUrlFunc = (i) => DATEPHOTOS[i].url;
  const getCommentsFunc = (i) => DATEPHOTOS[i].picture__comment;
  const getLikesFunc = (i) => DATEPHOTOS[i].picture__likes;

  for (let i = 0; i < DATEPHOTOS.length; i++) {
    const element = template.cloneNode(true); // Клонируем элемент со всеми "внутренностями"
    element.innerHTML = `<img src="photos/${getUrlFunc(i)}.jpg" width="182" height="182"><p class="picture__info"><span class="picture__comments">${getCommentsFunc(i)}</span><span class="picture__likes">${getLikesFunc(i)}</span></p>`;
    fragmentBox.appendChild(element);
  }
  pool.appendChild(fragmentBox);
}

getFetch();

let portToMain = pool.children;
export {
  portToMain
};
