const functions = require('./functions');

test('addElement returns array with element added without changing array', () => {
  const array = [1,2,3,4,5];
  expect(functions.addElement(array, 6)).toEqual([1,2,3,4,5,6]);
  expect(array).toEqual([1,2,3,4,5]);
});

test('addElementToMiddle returns array with element added at appropriate position without changing array', () => {
  const array = [1, 2, 3, 4, 5];
  expect(functions.addElementToMiddle(array, 6, 3)).toEqual([1,2,3,6,4,5]);
  expect(array).toEqual([1,2,3,4,5]);
});

test('replaceElement returns an array with element at positionIndex replaced with element without changing array', () => {
  const array = [1,2,3,4,5];
  expect(functions.replaceElement(array, 6, 3)).toEqual([1,2,3,6,5]);
  expect(array).toEqual([1,2,3,4,5]);
});

test('removeElement returns an array with element at positionIndex removed without changing array', () => {
  const array = [1,2,3,4,5];
  expect(functions.removeElement(array, 3)).toEqual([1,2,3,5]);
  expect(array).toEqual([1,2,3,4,5]);
});

test('reverseArray returns an array with element order reversed without changing array', () => {
  const array = [1,2,3,4,5];
  expect(functions.reverseArray(array)).toEqual([5,4,3,2,1]);
  expect(array).toEqual([1,2,3,4,5]);
});

