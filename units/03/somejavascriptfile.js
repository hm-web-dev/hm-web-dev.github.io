let x = 4;
console.log(x + 4);

function f(v) {
    return v + 5;
}

function higherOrderFunction(arr, fn) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i]);
    }
    return arr;
}

console.log(higherOrderFunction([2,3,4], f))
function isEven(num) {
    return num % 2 == 0;
}
console.log([2,3,4].filter((x) => x % 2 == 0))
let arr = [2,3,4];
arr.reduce()