function makeNumber(str) {
    var numberString = '';
    for (var i = 0; i < str.length; i++) {
      if(!isNaN(str.charAt(i))){
        numberString += str.charAt(i);
      }
    }

    return numberString;
}

console.log(makeNumber('erer384jjjfd123')); //=>384123
console.log(makeNumber('123098h76gfdd')); //=>12309876
console.log(makeNumber('ijifjgdj')); //=> should return empty string ->''
