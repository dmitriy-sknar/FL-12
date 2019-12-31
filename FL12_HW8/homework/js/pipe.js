function pipe() {
    let argNumber = arguments.length;
    if (argNumber === 0) {
        return;
    } else if (argNumber === 1) {
        return arguments[0];
    }

    let i = 0;
    let number = arguments[0];
    for (i; i < (argNumber - 1); i++) {
         let func = arguments[i+1];
         number = func(number);
    }
    return number;
}

function addOne(x) {
    return x + 1;
}

console.log(pipe(1, addOne)); //=> 2
console.log(pipe(1, addOne, addOne)); //=> 3
