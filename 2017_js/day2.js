// http://adventofcode.com/2017/day/2

//PART ONE
function checksum(sheet) {
  const formatted_input = sheet.split("\n").map((row) => (row.split("\t").map(Number)));
  return formatted_input.reduce((acc,val,index,arr) => {
    acc += (Math.max(...val) - Math.min(...val));
    return acc;
  },0)
}

//PART TWO

function checksum_2(sheet) {
  const formatted_input = sheet.split("\n").map((row) => (row.split("\t").map(Number)));
  
  const get_divisible = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++ ) {
        if (arr[i] % arr[j] === 0){
          return (arr[i] / arr[j]);
        } 
        else if (arr[j] % arr[i] === 0) {
          return (arr[j] / arr[i]);
        }
      }
    }
    return 0;
  };
  
  return formatted_input.reduce((acc,row,index,arr) => {
    acc += get_divisible(row);
    return acc;
  },0);
}
