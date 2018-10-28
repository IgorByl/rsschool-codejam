function sum(a, b) {
  return a + b;
}
function make(...groupFirst) {
  return function stepOne(...groupSecond) {
    return function stepTwo(...groupThird) {
      return function stepThree(sum) {
        return [...groupFirst, ...groupSecond, ...groupThird].reduce(sum, 0);
      };
    };
  };
}
make();
sum();
