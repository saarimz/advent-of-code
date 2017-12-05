// http://adventofcode.com/2017/day/5/

// part one

function count_steps(input_arr) {
  input_arr = input_arr.split('\n').map(Number);
  let steps = 0;
  let current_index = 0;
  while ((current_index < input_arr.length) && (current_index >= 0)) {
    let move = input_arr[current_index];
    input_arr[current_index] += 1;
    current_index += move;
    steps++;
  }
  return steps;
}

// part two

function count_steps_2(input_arr) {
  input_arr = input_arr.split('\n').map(Number);
  let steps = 0;
  let current_index = 0;
  while ((current_index < input_arr.length) && (current_index >= 0)) {
  input_arr[current_index] >= 3 ? (current_index += input_arr[current_index]--) : (current_index += input_arr[current_index]++)
  steps++
  }
  return steps;
}
