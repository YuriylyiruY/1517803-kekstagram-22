const getRandomBetween = function (fromNum, toNum) {

  if (isNaN(toNum) || isNaN(fromNum) || Array.isArray(toNum) || Array.isArray(fromNum) || fromNum < 0 || toNum < 0) {
    throw new Error('Передано неверное значение.');
  }

  let max = fromNum;
  let min = toNum;
  if (fromNum > toNum) {
    [min, max] = [max, min];
  }
  return Math.floor((Math.random() * (max + 1 - min) + min));
}

//============================================
const checkStringLength = function (STR, MAXLENGTH) {
  return (STR.length <= MAXLENGTH);
}
//===========================================
const getRandomValue = (arr) => {

  const randArray = getRandomBetween(0, arr.length);

  return arr[randArray];
};
//===========================================
let callback = () => Math.floor(Math.random() * 3) - 1; //получает значения -1,0,1 для метода sort
const getRandomTextFromArr = (message) => {
  const MESSAGE_COPY = message.slice();
  return MESSAGE_COPY.sort(callback).slice(0, getRandomBetween(1,2));
}
//=============================================
export {
  getRandomBetween,
  getRandomValue,
  checkStringLength,
  getRandomTextFromArr
};
