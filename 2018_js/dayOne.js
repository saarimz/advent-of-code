// https://adventofcode.com/2018/day/1

// PART ONE

function dayOneSolve1(input){
  // clean the data
  const arr = input.split(/\n/g);
  const inputArr = arr.filter((el) => {
    return el !== '';
  });
  // make sure the arr has values
  if (!inputArr.length) {
    return false;
  }
  // convert to numbers and then sum
  return inputArr.map(Number).reduce((acc,val) => {
    acc += val;
    return acc;
  },0)
}

// PART TWO

function dayOneSolve2(input, duplicatesHash={}, currentAcc=0){
  // clean the data
  const arr = input.split(/\n/g);
  const inputArr = arr.filter((el) => {
    return el !== '';
  });
  // make sure inputs are valid
  if (!inputArr.length || currentAcc == null) {
    return false;
  }
  // create a list of accumulated frequencies
  accFrequencies=[];
  inputArr.map(Number).forEach((el) => {
    let newAcc = el + currentAcc;
    accFrequencies.push(newAcc);
    currentAcc = newAcc;
  });
  // create a hash of accumulated frequeuncies
  for (let freq of accFrequencies){
    // check to see if freq exists in the hash
    if (duplicatesHash[freq] == true) {
      // if it exists return that freq
      return freq;
    } else {
      // otherwise add the freq to the hash
      duplicatesHash[freq] = true;
    }
  }
  // recur over the list until we get a duplicate accumulated frequency
  // this feels risky because what if there is none?
  return dayOneSolve2(
    input,
    duplicatesHash,
    accFrequencies[accFrequencies.length-1]
  );
}
