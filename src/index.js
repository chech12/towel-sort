
// You should implement your task here.

module.exports = function towelSort (matrix=[]) {
  const arr = [];
  let odd = false;
  for (let subArr of matrix) {
    if (odd) subArr = subArr.reverse();
    for (let el of subArr) {
      arr.push(el);
    }
    odd = !odd;
  }
  return arr;
}
