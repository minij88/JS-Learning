function createSimpleIterator(array) {
  let index = 0;
  return {
    next: function() {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}

const myIterator = createSimpleIterator(['A', 'B']);

console.log(myIterator.next()); // { value: 'A', done: false }
console.log(myIterator.next()); // { value: 'B', done: false }
console.log(myIterator.next()); // { value: undefined, done: true }