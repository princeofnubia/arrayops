class ArrayProc {
  constructor(arr) {
    this.arr = arr;
  }

  at(index) {
    let indexValue;
    for (let indx = 0; indx < this.arr.length; indx++) {
      let valueAtEachIndex = this.arr[index];
      if (indx == index) {
        indexValue = valueAtEachIndex;
        break;
      }
    }
    return indexValue;
  }

  concat(arr) {
    let concatArray = [];
    for (let index = 0; index < this.arr.length; index++) {
      concatArray.push(this.arr[index]);
    }
    for (let index = 0; index < arr.length; index++) {
      concatArray.push(arr[index]);
    }
    return concatArray;
  }

  copywithin(start, from, end = this.arr.length) {
    for (let index = from; index < end; index++) {
      this.arr[start] = this.arr[index];
      start++;
    }
    return this.arr;
  }

  every(func) {
    for (let index = 0; index < this.arr.length; index++) {
      const element = this.arr[index];
      if (!func(element)) {
        return false;
      }
    }
    return true;
  }
}

let d = new ArrayProc([7, 6, 9, 6, 8, 10, 44, 23]);
console.log(d.concat([9, 4, 5]));

const greaterThan5 = (num) => num > 5;

console.log(d.every(greaterThan5));
