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

