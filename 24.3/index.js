const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];
Array.prototype.FILTER = function (callback) {
  let newArr = [];
  this.forEach((element) => {
    if (callback(element)) newArr.push(element);
  });
  return newArr;
};

console.log(words.FILTER((word) => word.length > 6));

Array.prototype.FIND = function (callback) {
  let newArr = [];
  this.forEach((element) => {
    if (callback(element)) newArr.push(element);
  });
  return newArr;
};

console.log(words.FILTER((word) => word.length > 6));
