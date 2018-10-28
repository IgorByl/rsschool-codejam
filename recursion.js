function recursion(tree) {
  const arrSort = [];
  arrSort.push([tree.value]);
  function searchForLeaf(objLikeArr) {
    const array = [];
    objLikeArr.forEach(
      (node) => {
        if (node.left) array.push(node.left);
        if (node.right) array.push(node.right);
      },
    );
    if (array.length) {
      const temp = [];
      for (let i = 0; i < array.length; i += 1) {
        temp.push(array[i].value);
      }
      arrSort.push(temp);
      searchForLeaf(array);
    }
  }
  searchForLeaf([tree]);
  return arrSort;
}
recursion();
