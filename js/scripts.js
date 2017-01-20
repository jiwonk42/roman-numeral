//businesss
// var I = 1;
// var V = 5;
// var X = 10;
// var L = 50;
// var C = 100;
// var D = 500;
// var M = 1000;

var result = function(number) {  // dummy number = 7;
  var output = "";                //output = "";
  //A loop
  if (number > 0 && number < 4) { //won't run, number is too high.
    for (var i = 1; i <= number; i++){ //nuber = 2
      output += "I";
    }
    //B loop
  } else if (3 < number && number < 9) { //we get in here
    if (number === 4){ //nope
      return "IV";
    } else if (number === 5) { //nope
      return "V";
    } else { // we get in here with 7
      return "V" + result(number - 5); // "VII";
     }
    // C loop
  } else if ( number > 8 && number < 14) {
    if (number === 9){
      return "IX";
    } else if (number === 10){
      return "X";
    } else {
      return "X" + result(number-10);
    }
    // D loop
  } else if (number > 13 && number < 40) {
    return "X" + result(number - 10);

  // E loop
  } else if(number > 39 && number < 50) {
      if(number === 40) {
        return "XL";
      }
      return "XL" + result(number - 40);

    // F loop
  } else if (number > 49 && number < 90) {
    if(number === 50) {
      return "L";
    }
      return "L" + result(number - 50);

    // G loop
  } else if (number > 89 && number < 100) {
    if(number === 90) {
         return "XC";
       }
         return "XC" + result(number - 90);

    // H loop
  } else if (number > 99 && number < 400) {
      if(number === 100) {
        return "C";
      }
        return "C" + result(number - 100);
      //final loop
  } else {
      return "this number is not able to be converted.";
  }
    return output;
}



//user logic
$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#firstNum").val());

    var answer = result(number);
    $(".result").text(answer);

  })
})
