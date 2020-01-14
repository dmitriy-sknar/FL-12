const ONE = 1, TWO = 2, THREE = 3, FOUR = 4, FIVE = 5, SIX = 6, SEVEN = 7, EIGHT = 8;

//task 1
function convert() {
    let res = []
    for(let i = 0; i < arguments.length; ++i) {
        if(typeof arguments[i] === 'number'){
            res[i] = '' + arguments[i];
        } else if(typeof arguments[i] === 'string') {
            res[i] = + arguments[i];
        }
    }
    return res;
}
console.log(convert('1', TWO, THREE, '4'));

//task 2
function executeforEach(arr, func) {
    for(let i = 0; i < arr.length; ++i){
        func(arr[i]);
    }
}
executeforEach([1, TWO, THREE], function(el){
    console.log(el * TWO);
});

//task 3
function mapArray(arr, func) {
    let counter = 0;
    executeforEach(arr, function(el){
        arr[counter++] = func(+el);
    });
    return arr;
}
mapArray([TWO, '5', EIGHT], function(el){
    return el + THREE;
});

//task 4
function filterArray(arr, func){
    let newArr = [];
    executeforEach(arr, function(el){
        if(func(el)){
            newArr.push(el);
        }
    });
    return newArr;
}
let filteredArray = filterArray([TWO, FIVE, EIGHT], function(el){
    return el % TWO === 0;
});
console.log(filteredArray);

//task 5
function flipOver(str) {
    let newStr = '';
    for(let i = str.length - 1; i >= 0; --i){
        newStr += str[i];
    }
    return newStr;
}
console.log(flipOver('hey world'));

//task 6
function makeListFromRange(arr) {
    let newArr = [];
    for(let i = 0; i <= arr[1] - arr[0]; i++){
        newArr[i] = arr[0] + i;
    }
    return newArr;
}
console.log(makeListFromRange([TWO, SIX]));

//task 7
function getArrayOfKeys(arr, key) {
    let newArr = [];
    executeforEach(arr, function(el){
        newArr.push(el[key]);
    });
    return newArr;
}
let actors = [
     {name: 'tommy', age: 36},
     {name: 'lee', age: 28}
];
console.log(getArrayOfKeys(actors, 'name'));

//task 8
const THIRTY = 30;
function substitute(arr) {
    mapArray(arr, function(el){
        return el < THIRTY ? '*' : el;
    });
    return arr;
}
let num58 = 58, num14 = 14, num48 = 48, num2 = 2, num31 = 31, num29 = 29;
let numArrayForSubstitution = [num58, num14, num48, num2, num31, num29];
console.log(substitute(numArrayForSubstitution));

//task 9
const HOURS = 24, SECONDSINMINUTE = 60, MINUTESINHOUR = 60, MILLISINSECOND = 1000, DAYSINONEYEAR = 365;
const MILLISECONDSINONEDAY = HOURS * SECONDSINMINUTE * MINUTESINHOUR * MILLISINSECOND;
const YEAR = 2019, MONTH = 0, DAY = 2;
const date = new Date(YEAR, MONTH, DAY);
function getPastDate(date, day) {
    let newDate = new Date(date - day * MILLISECONDSINONEDAY);
    let dayFraction = newDate.toString().split(' ')[TWO]
    return parseInt(dayFraction);
}
console.log(getPastDate(date, 1));
console.log(getPastDate(date, TWO));  
console.log(getPastDate(date, DAYSINONEYEAR));
 
//task 10
function formatDate(date) {
    let strDate = date.toString().split(' ');
    return strDate[THREE] + '/' + (1 + date.getMonth()) + '/' + strDate[TWO] + ' ' + strDate[FOUR].slice(0, -THREE);
}
console.log(formatDate(new Date('6/15/2018 09:15:00')));
console.log(formatDate(new Date()));