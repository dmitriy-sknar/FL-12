let koef_a = prompt('Enter coeficient "A" for the quadratic equation:');
let koef_b = prompt('Enter coeficient "B" for the quadratic equation:');
let koef_c = prompt('Enter coeficient "C" for the quadratic equation:');

const power = 2;
const discriminant = 4;
const root_divid_koef = 2;

if (isNaN(koef_a) || isNaN(koef_b) || isNaN(koef_c)) {
    alert('Invalid input data')
}

let d = Math.pow(koef_b, power) - discriminant * koef_a * koef_c;
let x = -koef_b / root_divid_koef * koef_a;
let x1 = (-koef_b + Math.sqrt(d)) / root_divid_koef * koef_a;
let x2 = (-koef_b - Math.sqrt(d)) / root_divid_koef * koef_a;

if (d === 0) {
    console.log('only one root: ', x)
} else if (d > 0) {
    console.log('root 1: ', x1)
    console.log('root 2: ', x2)
} else {
    console.log('No solution could be found for inputed values')
}