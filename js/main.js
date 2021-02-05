//task 1
const randomNum = function (fromNum, toNum) {


  try {
    if (isNaN(toNum) || isNaN(fromNum) || Array.isArray(toNum) || Array.isArray(fromNum) || fromNum < 0 || toNum < 0) throw new Error('error');


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

  } catch (err) {
    return err;
  }

}
let min = 50;
let max = 10;
randomNum(min, max);


//task 2
const strLenght = function (str, maxLenght) {
  if (str.length <= maxLenght) {
    return str;
  }

}
let str = 'Hello';
let maxLenght = 9;
strLenght(str, maxLenght);
