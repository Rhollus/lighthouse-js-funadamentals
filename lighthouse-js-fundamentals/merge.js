function merge(l1, l2) {
  for (var i = 0; i < l2.length; i++) {
    l1.push(l2[i]);
  } return l1.sort();


}
console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);