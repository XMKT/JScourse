const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

setTimeout(() => console.log("Delayed message"), 1000);

function multiply(value, multiplier = 1) {
    return value * multiplier;
}
console.log(multiply(5)); // 5
