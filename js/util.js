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
  const MESSAGE_COPY = message.slice();
  const maxQantityMessages = 3;
  return MESSAGE_COPY.sort(callbackForSortMethod).slice(getRandomBetween(0, 1),maxQantityMessages); // случайное колличество значений из заданного диапазона, которое нужно достать из массива
}

export {
  getRandomBetween,
  getRandomValue,
  checkStringLength,
  getRandomTextFromArr
};
