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
export {
  getRandomBetween
};
//task 2
const checkStringLength = function (STR, MAXLENGTH) {
  return (STR.length <= MAXLENGTH);
}
export {
  checkStringLength
};
