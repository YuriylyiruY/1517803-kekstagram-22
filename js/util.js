const getRandomBetween = function (fromNum, toNum) {

  if (isNaN(toNum) || isNaN(fromNum) || Array.isArray(toNum) || Array.isArray(fromNum) || fromNum < 0 || toNum < 0) {
    throw new Error('Передано неверное значение.');
  }

  let max = fromNum;
  let min = toNum;
  if (fromNum > toNum) {
    [min, max] = [max, min];
    return (Math.floor((Math.random() * (max + 1 - min) + min)));
  } else
    return (Math.floor((Math.random() * (max + 1 - min) + min)));
}


const checkStringLength = function (STR, MAXLENGTH) {
  return (STR.length <= MAXLENGTH);
}

const getRandomValue = (arr) => {
  const randomValueFromInterval = getRandomBetween(0, arr.length);

  return arr[randomValueFromInterval];
};

let callbackForSortMethod = () => Math.floor(Math.random() * 3) - 1; //получает значения -1,0,1 для метода sort

/**
 * получает случайное колличество значений из массива
 * @param {*} message
 * @returns
 */

const getRandomTextFromArr = (message) => {
  const messageCopy = message.slice();
  const MAX_QUANTITY_MESSAGE = 3;
  return messageCopy.sort(callbackForSortMethod).slice(getRandomBetween(0, 1),MAX_QUANTITY_MESSAGE); // случайное колличество значений из заданного диапазона, которое нужно достать из массива
}
const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}
const PASS_SHOW_TIME = 5000;

const showPass = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'green';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, PASS_SHOW_TIME);
}



export {
  getRandomBetween,
  getRandomValue,
  checkStringLength,
  getRandomTextFromArr,
  showAlert,
  showPass
};
