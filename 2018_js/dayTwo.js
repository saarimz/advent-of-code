// https://adventofcode.com/2018/day/2

//PART ONE
function dayTwoSolve1(input){
  let arr = input.split(/\n/g);
  arr = arr.filter((el) => el !== '');

  let twos = 0;
  let threes = 0;

  const charMapsArr = arr.map((el) => {
    let map = {};
    el.split('').forEach(letter => {
      if (map[letter]) {
        map[letter] += 1;
      } else {
        map[letter] = 1;
      }
    });
    return map;
  });

  charMapsArr.forEach((h) => {
    const valuesArr = Object.values(h);
    if (valuesArr.includes(3)) {
      threes++;
    }
    if (valuesArr.includes(2)) {
      twos++;
    }
  });

  return twos * threes;
}

// PART TWO
function dayTwoSolve2(input){
  let arr = input.split(/\n/g);
  arr = arr.filter((el) => el !== '');

  const differentElementsFn = (stringA,stringB) => {
    let differentEl = 0;
    let commonString = '';
    for (let i = 0; i < stringA.length; i++){
      let stringAEl = stringA[i];
      let stringBEl = stringB[i];
      if (stringAEl !== stringBEl) {
        differentEl++;
      } else {
        commonString += stringAEl;
      }
    };
    return [differentEl, commonString];
  }

  let finalCode = null;
  let currentDiff = Infinity;

  for (let i = 0; i < arr.length - 1; i++){
    for (let j=i+1; j < arr.length; j++) {
      let firstElement = arr[i];
      let secondElement = arr[j];

      const [diff,common] = differentElementsFn(firstElement, secondElement)
      if (diff < currentDiff) {
        finalCode = common;
        currentDiff = diff;
      }
    }
  }

  return finalCode;
}