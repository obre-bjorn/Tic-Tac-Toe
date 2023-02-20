let array = [
    [1, 2, 4],
    [2, 3, 5],
    [5, 6, 7]
]


let values = array.map((row) => row.map((value) => value + 2))

console.log(values)