// https://adventofcode.com/2018/day/5/

// PART ONE

function dayFiveSolve1(input, recur = false) {
  let arr = recur ? input : input.split(/\n/g);
  arr = arr.filter(el => el !== '');
  let formattedInputArr = recur ? input : arr[0].split('');

  let done = false;

  while (!done) {
    done = true;
    formattedInputArr.forEach((current, idx) => {
      const next = formattedInputArr[idx + 1];

      if (
        !!current &&
        !!next &&
        current !== next &&
        (current === next.toLowerCase() || next === current.toLowerCase())
      ) {
        formattedInputArr[idx] = null;
        formattedInputArr[idx + 1] = null;
        done = false;
      }
    });

    formattedInputArr = formattedInputArr.filter(el => {
      return el != null;
    });
  }
  return formattedInputArr.length;
}

// PART TWO

function dayFiveSolve2(input) {
  let arr = input.split(/\n/g);
  arr = arr.filter(el => el !== '');
  let formattedInputArr = arr[0].split('');

  let sizes = [];

  const uniques = formattedInputArr
    .map(el => el.toLowerCase())
    .filter((val, idx, arr) => {
      return idx === arr.indexOf(val);
    });

  uniques.forEach(uniqueChar => {
    let arrCopy = formattedInputArr.slice();
    const filtered = arrCopy.reduce((acc, val) => {
      if (val && (val === uniqueChar || val.toLowerCase() === uniqueChar)) {
        return acc;
      }

      acc.push(val);
      return acc;
    }, []);
    sizes.push(dayFiveSolve1(filtered, true));
  });

  return Math.min(...sizes);
}
