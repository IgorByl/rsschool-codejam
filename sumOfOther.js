function sumOfOther(array) {
  return array.map(item => array.reduce((acc, i) => acc + i) - item);
}
sumOfOther();
