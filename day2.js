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

