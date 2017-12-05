// http://adventofcode.com/2017/day/3

//PART ONE (used a lot of help from the advent reddit to get this)

function distance(n) {
    const root = Math.ceil(Math.sqrt(n));
    const corner_square = root % 2 !== 0 ? root : root + 1;
    const num = (corner_square - 1) / 2;
    const cycle = n - Math.pow((corner_square - 2),2);
    const innerOffset = cycle % (corner_square - 1);
    return num + Math.abs(innerOffset - num);
}
