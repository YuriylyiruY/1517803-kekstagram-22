//task 1
const randomNum = function (fromNum, toNum) {
  if (isNaN(toNum) || isNaN(fromNum) || Array.isArray(toNum) || Array.isArray(fromNum)) throw new Error('Получилось))');

  if (fromNum > toNum) {
    let between = fromNum;
    fromNum = toNum;
    toNum = between;
    return toNum, fromNum;

  }
  try {
    let rand = +(Math.random() * (toNum + 1 - fromNum) + fromNum);

    if (fromNum <= rand && toNum >= rand) {
      return Math.floor(rand).toString();

    } else if (fromNum == toNum) {
      return Math.floor(toNum).toString();
    }
  } catch (err) {
    console.log(err);
  }


}
let min;
let max;
randomNum(min, max);

// function func(x) {
//   alert(x);
// }

//task 2
const strLenght = function (str, maxLenght) {
  return str.length <= maxLenght;
}
let str;
let maxLenght;
strLenght(str, maxLenght);
