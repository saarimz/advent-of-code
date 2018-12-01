// http://adventofcode.com/2017/day/4

//PART ONE

function passphrase(input) {
  
  const validator = (arr) => {
    return arr.split(' ').reduce((acc,val,index,arr) => {
      if (arr.slice(index+1).indexOf(val) !== -1) {
        acc = false;
      }
      return acc;
    },true);
  };
  
  return input.split("\n").map(validator).filter(Boolean).length;  
  
}

//PART TWO

function passphrase_2(input) {
  
  const validator = (arr) => {
    return arr.split(' ').reduce((acc,val,index,arr) => {
      val = val.split('').sort().join('');
      let remaining_array = arr.slice(index+1);
      for (let i = 0; i < remaining_array.length; i++) {
        remaining_array[i] = remaining_array[i].split('').sort().join('');
        if (val === remaining_array[i]) {
          acc = false;
        }
      }
      return acc;
    },true);
  };
  
  return input.split("\n").map(validator).filter(Boolean).length;  
}
