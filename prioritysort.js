/**
 * The purpose of this algorith is to sort
 * an array by prioritzing based on the target given
 * amongst lists of values in the array
 * E.g [2, 3, 5, 3,2,3,2] to make to a sort while making
 * 2 as the target parameter we will get
 * [2,2,2,3,5,3,3]
 */

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

export default prioritySort;
