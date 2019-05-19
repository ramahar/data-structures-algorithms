// Scenario: You have a 3x3 keypad of numbers 1-9. The numbers are jumbled and will be assigned with an argument passed into the function.
//
// Write a function that takes 2 integer inputs: number that will be keyed in and a number representing keypad order
// return the number of spaces your 'finger' has to move to reach the keys needed to enter the number given

function entryTime(s, keypad) {
  let keys = keypad.toString().split('');
  s = s.toString();
  let map = {};
  map[keys[0]] = [0,0]
  map[keys[1]] = [0,1]
  map[keys[2]] = [0,2]
  map[keys[3]] = [1,0]
  map[keys[4]] = [1,1]
  map[keys[5]] = [1,2]
  map[keys[6]] = [2,0]
  map[keys[7]] = [2,1]
  map[keys[8]] = [2,2]


  let result = 0;
  let position = map[s[0]];

  for (let i = 1, len = s.toString().length; i < len; i++){
    let num = s[i]
    let newPos = map[num];
    let posXChange = Math.abs(position[0]-newPos[0]);
    let posYChange = Math.abs(position[1]-newPos[1]);
    if (posXChange === 1 && posYChange === 1) {
      result += 1;
    } else if (posXChange >= 1 && posYChange >= 1) {
      result += 2;
    }else {
      result += posXChange + posYChange;
    }

    position = newPos;
  }

  return result;
}

// entryTime(123456, 123456789)