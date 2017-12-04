//http://adventofcode.com/2017/day/1

function findpairs(n) {
  arr = n.replace(/\D/g, '0').split('').map(Number);
  pairs_arr = arr.map( (val,index,arr) => {
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

