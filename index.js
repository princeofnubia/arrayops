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

  fill(value, start, end = this.arr.length) {
    const arra = this.arr;
    for (let index = start; index < end; index++) {
      arra[index] = value;
    }
    return arra;
  }

  filter(func) {
    let filtered = [];
    for (let index = 0; index < this.arr.length; index++) {
      if (func(this.arr[index])) {
        filtered.push(this.arr[index]);
      }
    }
    return filtered;
  }

  find(func) {
    let filtered = [];
    for (let index = 0; index < this.arr.length; index++) {
      if (func(this.arr[index])) {
        filtered.push(this.arr[index]);
        break;
      }
    }
    return filtered.length === 0 ? undefined : filtered;
  }

  findIndex(func) {
    let ind;
    for (let index = 0; index < this.arr.length; index++) {
      if (func(this.arr[index])) {
        ind = index;
        break;
      }
    }
    return ind === undefined ? -1 : ind;
  }

  findIndexR(func) {
    let ind;
    for (let index = this.arr.length - 1; index >= 0; index--) {
      if (func(this.arr[index])) {
        ind = index;
        break;
      }
    }
    return ind === undefined ? -1 : ind;
  }

  findIndexB(func) {
    let ind;
    for (let index = 0; index < this.arr.length; index++) {
      if (func(this.arr[index])) {
        ind = index;
      }
    }
    return ind === undefined ? -1 : ind;
  }
}

function a(n) {
  // base case
  if (n == 0) {
    return 1;
  }
  // recursive case
  return n * a(n - 1);
}

function callMeAgain(n) {
  // base case
  if (n == 0) {
    return;
  }
  // recursive case
  console.log(n, ": call me again");
  callMeAgain(n - 1);
}

callMeAgain(10);

function flat(arr, depth) {
  // base case;
  let f = [];
  let level = 1;
  function flattener(arr, level) {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (Array.isArray(element)) {
        if (depth == level) {
          f.push(element);
          break;
        }
        level++;
        f.concat(flattener(element, level++));
      } else {
        f.push(element);
      }
    }
    return f;
  }

  return flattener(arr, level);
}

function flat2(arr) {
  // base case;
  let f = [];
  function flattener(arr) {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (Array.isArray(element)) {
        f.concat(flattener(element));
      } else {
        f.push(element);
      }
    }
    return f;
  }

  return flattener(arr);
}

function flatMap(arr, func) {
  // base case;
  let f = [];
  function flattener(arr) {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (Array.isArray(element)) {
        f.concat(flattener(element));
      } else {
        f.push(func(element));
      }
    }
    return f;
  }

  return flattener(arr);
}

console.log(flatMap([1, [2, 3, 5]], (x) => x ** 2));
