const testCast = `199
200
208
210
200
207
240
269
260
263`

function partOne (arr) {
    // const arr = string.split("\n").map(i => Number(i))
    let result = 0
    for(let i = 0;i < arr.length;i++) {
        if (arr[i + 1] && arr[i + 1] > arr[i]) {
            result ++
        }
    } 
    return result
}

// partOne(testCast)

function partTwo (string) {
    const arr = string.split("\n").map(i => Number(i))
    let result = []
    for(let i = 0;i < arr.length;i++) {
        if (arr[i + 1] && arr[i+2]) {
            result.push(arr[i] + arr[i + 1] + arr[i + 2])
        }
    } 
    return partOne(result)
    console.log('result', result)
}

console.log(partTwo(testCast))
