const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  const pos = [0, 0]
  let x = 0
  let y = 0
  let move
  for (move of moves){
    if (move == 'north') {
      y = y + 1;
      pos[1] = y;
    }
    if (move == 'south') {
      y = y - 1;
      pos[1] = y;
    }    if (move == 'east') {
      x = x + 1;
      pos[0] = x;
    }    if (move == 'west') {
      x = x - 1;
      pos[0] = x;
    }
  }
  //console.log(pos)
  return pos
}

finalPosition(moves);
