
function addElement(array, element) {
  // return an array with element added to the end of the array without modifying the original array
  return [...array, element];
}

function addElementToMiddle(array, element, positionIndex) {
  // return an array with element added at index of positionIndex without modifying the original array
  return [...array.slice(0, positionIndex), element, ...array.slice(positionIndex, array.length)];
}

function replaceElement(array, element, positionIndex) {
  // return an array with the element at positionIndex replaced by the value of the element parameter without
  // modifying the original array
  return [...array.slice(0, positionIndex), element, ...array.slice(positionIndex + 1, array.length)];
}

function removeElement(array, positionIndex) {
  // return an array with the element at positionIndex removed without modifying the original array
  return [...array.slice(0, positionIndex), ...array.slice(positionIndex + 1, array.length)];
}

function reverseArray(array) {
  // return array with the order reversed without modifying the original array
  const newArray = [...array];
  return newArray.reverse();
}


exports.addElement = addElement;
exports.addElementToMiddle = addElementToMiddle;
exports.replaceElement = replaceElement;
exports.removeElement = removeElement;
exports.reverseArray = reverseArray;