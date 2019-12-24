let triangle_side_a = prompt('Enter the length of the triangle side A:')
let triangle_side_b = prompt('Enter the length of the triangle side B:')
let triangle_side_c = prompt('Enter the length of the triangle side C:')

if (isNaN(triangle_side_a) || isNaN(triangle_side_b) || isNaN(triangle_side_c)) {
    alert('Input values should be numbers')
}

if (triangle_side_a === 0 || triangle_side_b === 0 || triangle_side_c === 0) {
    alert('Triangle sides should have positive length')
}

if (!(triangle_side_c + triangle_side_b > triangle_side_a
    || triangle_side_a + triangle_side_c > triangle_side_b
    || triangle_side_a + triangle_side_b > triangle_side_c)) {
    alert('For inputed values triangle does not exist')
} else if (triangle_side_a === triangle_side_b
    && triangle_side_a === triangle_side_c) {
    console.log('Equilateral triangle')
} else if (triangle_side_a === triangle_side_b
    && triangle_side_a === triangle_side_c
    || triangle_side_a === triangle_side_b
    && triangle_side_b === triangle_side_c
    || triangle_side_a === triangle_side_c
    && triangle_side_b === triangle_side_c) {
    console.log('Isosceles triangle')
} else {
    console.log('Scalene triangle')
}