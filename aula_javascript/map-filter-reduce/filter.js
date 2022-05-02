function filtrapares(arr) {
    return arr.filter(call);
}

function callback(item) {
    return item % 2 ===0;
}

const nums = [2, 5, 6, 9, 10];

console.log(filtrapares(nums));