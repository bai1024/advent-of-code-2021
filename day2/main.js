var fs = require('fs')
var data = fs.readFileSync(0, 'utf-8')
const arr = data.split('\n').map((i) => {
  const [direction, move] = i.split(' ')
  return [direction, Number(move)]
})

function partOne(arr) {
  const forward = arr
    .filter((i) => i[0] === 'forward')
    .map((j) => j[1])
    .reduce((a, b) => a + b)
  const up = arr
    .filter((i) => i[0] === 'up')
    .map((j) => j[1])
    .reduce((a, b) => a + b)
  const down = arr
    .filter((i) => i[0] === 'down')
    .map((j) => j[1])
    .reduce((a, b) => a + b)
  return forward * (down - up)
}

// console.log(partOne(arr)) // 1604850

function partTwo(arr) {
  let aim = 0
  let position = 0
  let depth = 0
  for (let i = 0; i < arr.length; i++) {
    let direction = arr[i][0]
    let move = arr[i][1]
    if (direction === 'forward') {
      position += move
      depth += move * aim
    } else if (direction === 'down') {
      aim += move
    } else if (direction === 'up') {
      aim -= move
    }
  }
  return position * depth
}

console.log(partTwo(arr)) // 1685186100
