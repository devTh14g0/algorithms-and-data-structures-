function findSmallestIndex(array) {
  let smallestElement = array[0];
  let SmallestIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(array) {
  const sortedArray = [];
  const copyArray = array.slice();
  const length = array.length;

  for (let i = 0; i < array.length; i++) {
    const smallestIndex=findSmallestIndex(copyArray)
    sortedArray.push(copyArray.splice(smallestIndex,1)[0])
  }
  return sortedArray
}

const sourceArray=[5,3,6,2,10]
const sourtedArray = selectionSort([5, 3, 6, 2, 10]);
console.log("source array - ",sourceArray)
console.log("new sorted arrey - ", sourtedArray)

//parece com o quicksort