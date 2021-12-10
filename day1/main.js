var fs = require('fs')
var data = fs.readFileSync(0, 'utf-8')

const arr = data.split('\n').map(Number)

function partOne(arr) {
  let result = 0
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] > arr[i]) {
      result++
    }
  }
  return result
}

console.log(partOne(arr)) // 1400

function partTwo(arr) {
  let result = []
  for (let i = 0; i < arr.length - 2; i++) {
    result.push(arr[i] + arr[i + 1] + arr[i + 2])
  }
  return partOne(result)
}

// console.log(partTwo(arr)) // 1429
