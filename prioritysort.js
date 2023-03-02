/**
 * The purpose of this algorith is to sort
 * an array by prioritzing based on the target given
 * amongst lists of values in the array
 * E.g [2, 3, 5, 3,2,3,2] to make to a sort while making
 * 2 as the target parameter we will get
 * [2,2,2,3,5,3,3]
 */

const getTargetList = (arr, target) => {
  const targetList = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element == target) {
      targetList.push(target);
    }
  }
  return targetList;
};

const getNonTargetList = (arr, target) => {
  const nonTargetList = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element != target) {
      nonTargetList.push(target);
    }
  }
  return nonTargetList;
};

const prioritySort = (arr, target) => {
  const nonTargetList = [];
  const targetList = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element == target) {
      targetList.push(target);
    } else {
      nonTargetList.push(element);
    }
  }
  return [...targetList, ...nonTargetList];
};

// console.log(prioritySort([2,3,5,3,2,3,2], 2)) => [2,2,2,3,5,3,3]
const prioritySort2 = (arr, targets) => {
  for (let index = 0; index < targets.length; index++) {
    const element = targets[targets.length - index - 1];
    arr = prioritySort(arr, element);
  }
  return arr;
};

const getTheSorted = (arr, target) => {
  let rr = getTargetList(arr, target);
  return rr;
};

const getTheSorteds = (arr, targets) => {
  let m = [];
  for (let index = 0; index < targets.length; index++) {
    const element = targets[index];
    m.push(...getTheSorted(arr, element));
  }
  return m;
};

console.log(getTheSorteds([2, 3, 5, 3, 2, 3, 2, 4, 6], [2, 6]));
//export default prioritySort;
