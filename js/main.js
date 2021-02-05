//task 1
const randomNum = function (fromNum, toNum) {

  if (isNaN(toNum) || isNaN(fromNum) || Array.isArray(toNum) || Array.isArray(fromNum) || fromNum < 0 || toNum < 0) {
    return false
  }

  if (fromNum > toNum) {
    let between = fromNum;
    fromNum = toNum;
    toNum = between;
  }
  let rand = +(Math.random() * (toNum + 1 - fromNum) + fromNum);

  if (fromNum <= rand && toNum >= rand) {
    return Math.floor(rand).toString();

  } else if (fromNum == toNum) {
    return Math.floor(toNum).toString();
  }



}
let min;
let max;
randomNum(min, max);

//task 2
const strLenght = function (str, maxLenght) {
  if (str.length <= maxLenght) {
    return str;
  }

}
let str;
let maxLenght;
strLenght(str, maxLenght);
