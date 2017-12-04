// http://adventofcode.com/2017/day/1

//NOTE: BOTH FUNCTIONS EXPECT A INPUT OF TYPE STRING

// part one

function findpairs(n) {
  const arr = n.replace(/\D/g, '0').split('').map(Number);
  const pairs_arr = arr.map( (val,index,arr) => {
    if (index == arr.length - 1) {
      return [val,arr[0]];
    } else {
      return [val,arr[index + 1]];
    }
  });
  return pairs_arr.reduce((acc,val) => {
    if (val[0] == val[1]) {
      acc += val[0];
    }
    return acc;
  },0);
}

// part two 

function findpairs_2(n) {
  const arr = n.replace(/\D/g, '0').split('').map(Number);
  const shift = arr.length / 2;
  const pairs_arr = arr.map( (val,index,arr) => {
    if ((index + shift) >= arr.length) {
      return [val,arr[((index + shift - arr.length))]];
    } else {
      return [val,arr[index + shift]];
    }
  });
  const result = pairs_arr.reduce((acc,val) => {
    if (val[0] === val[1]) {
      acc += val[0];
    }
    return acc;
  },0);
  return result;
}
