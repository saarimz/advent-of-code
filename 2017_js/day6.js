//http://adventofcode.com/2017/day/6

//part one

function memory_banks(arr){
  arr = arr.split(' ');
  let seen = [];
  let found = false;
  let steps = 0;
  
  const redistribute = (arr) => {
    let max = Math.max(...arr);
    let maxIndex = arr.indexOf(max);
    return arr.map((val,index,array) => {
      if (index === maxIndex) { 
        return max % (arr.length - 1); 
      } else {
        return val += Math.floor(max / (arr.length - 1));
      }
    });
  };
  
  const convert = (array) => (array.map(String).join(''));
  
  while (!found) {
    
    if (seen.indexOf(convert(arr)) !== -1) {
      found = true;
    } else {
      seen.push(convert(arr));
      arr = redistribute(arr);
      steps++
    }
  }
  return steps;
}
