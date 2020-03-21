
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined) return [];
  let result = [];
  matrix.forEach((element, index) => {
    if (index % 2 == 0) {
    element.sort((a,b) => a-b);
    result.push(...element);
  } else {
    element.sort((a,b) => a-b).reverse();
    result.push(...element);
  }
  })
  return result;
}

