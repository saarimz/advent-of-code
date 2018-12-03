// https://adventofcode.com/2018/day/3/

// PART ONE

function dayThreeSolve1(input) {
  let arr = input.split(/\n/g);
  arr = arr.filter(el => el !== '');

  let claims = [];
  arr.forEach(claim => {
    const regex = /\#(\d+)\s@\s(\d+)\,(\d+):\s(\d+)x(\d+)/g;
    const resultArr = regex.exec(claim);
    const [_, claimId, unitsFromLeft, unitsFromTop, width, height] = resultArr;

    claims.push({
      claimId,
      unitsFromLeft: +unitsFromLeft,
      unitsFromTop: +unitsFromTop,
      width: +width,
      height: +height
    });
  });

  let gridHash = {};

  for (claim of claims) {
    for (
      let i = claim.unitsFromLeft;
      i < claim.unitsFromLeft + claim.width;
      i++
    ) {
      for (
        let j = claim.unitsFromTop;
        j < claim.unitsFromTop + claim.height;
        j++
      ) {
        if (gridHash[[i, j]]) {
          gridHash[[i, j]] += 1;
        } else {
          gridHash[[i, j]] = 1;
        }
      }
    }
  }

  return Object.values(gridHash).reduce((acc, val) => {
    if (val >= 2) {
      acc++;
    }
    return acc;
  }, 0);
}

// PART TWO

function dayThreeSolve2(input) {
  let arr = input.split(/\n/g);
  arr = arr.filter(el => el !== '');

  let claims = [];
  arr.forEach(claim => {
    const regex = /\#(\d+)\s@\s(\d+)\,(\d+):\s(\d+)x(\d+)/g;
    const resultArr = regex.exec(claim);
    const [_, claimId, unitsFromLeft, unitsFromTop, width, height] = resultArr;

    claims.push({
      claimId,
      unitsFromLeft: +unitsFromLeft,
      unitsFromTop: +unitsFromTop,
      width: +width,
      height: +height
    });
  });

  let gridHash = {};

  for (claim of claims) {
    for (
      let i = claim.unitsFromLeft;
      i < claim.unitsFromLeft + claim.width;
      i++
    ) {
      for (
        let j = claim.unitsFromTop;
        j < claim.unitsFromTop + claim.height;
        j++
      ) {
        let claimRectangle = [[], [], [], []].flat();
        claimRectangle.sort();
        if (gridHash[[i, j]]) {
          gridHash[[i, j]] += 1;
        } else {
          gridHash[[i, j]] = 1;
        }
      }
    }
  }

  for (claim of claims) {
    let hasOverlap = false;
    for (
      let i = claim.unitsFromLeft;
      i < claim.unitsFromLeft + claim.width;
      i++
    ) {
      for (
        let j = claim.unitsFromTop;
        j < claim.unitsFromTop + claim.height;
        j++
      ) {
        const point = gridHash[[i, j]];
        if (point >= 2) {
          hasOverlap = true;
        }
      }
    }

    if (!hasOverlap) {
      return claim.claimId;
    }
  }

  return null;
}
