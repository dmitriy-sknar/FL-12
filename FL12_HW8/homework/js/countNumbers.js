function countNumbers() {
    let str = String(arguments[0]);
    let numbers = makeNumber(str);
    var unique = numbers.split('').filter(function (item, i, ar) {
        return ar.indexOf(item) === i;
    }).join('');
    var uniqueNumbers = [];

    for (var i = 0; i < unique.length; i++) {
        uniqueNumbers.push(Number(unique.charAt(i)));
    }

    var sorted = uniqueNumbers.sort();

    // create an empty dictionary
    var dict = [];
    for (i = 0; i < sorted.length; i++) {
        // dict.push({
        //     key: String(sorted[i]),
        //     value: 1
        // });
        dict[String(sorted[i])] = 0;
    }

    //count occurances on each number
    for (i = 0; i < numbers.length; i++) {
        let key = numbers[i];
        let count = dict[key];
        count = count + 1;
        dict[key] = count;
    }

    //prepare print string of occurances on each number
    var output = '';
    for (i = 0; i < sorted.length; i++) {
        output += '\'' + sorted[i] + '\': ' + dict[sorted[i]];
        if (i < sorted.length - 1) {
            output += ', ';
        }
    }
    return { output }
}

function makeNumber(str) {
    var numberString = '';
    for (var i = 0; i < str.length; i++) {
        if (!isNaN(str.charAt(i))) {
            numberString += str.charAt(i);
        }
    }

    return numberString;
}

console.log(countNumbers('erer384jj4444666888jfd123'));
// => {'1': 1, '2': 1, '3': 2, '4': 5, '6': 3, '8': 4}
console.log(countNumbers('jdjjka000466588kkkfs662555'));
// => {'0': 3, '2': 1, '4': 1, '5': 4, '6': 4, '8': 2}
console.log(countNumbers('')); // => {}
