//businesss
var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;

var result = function(number) {
  var output = "";
  //A loop
  if (number > 0 && number < 4) {
    for (var i = 1; i <= number; i++){
      output += "I";
    }
    //B loop
  } else if (3 < number && number < 9) {
    if (number === 4){
      return "IV";
    } else if (number === 5) {
      return "V";
    } else {
      return "V" + result(number-5);
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

} else if (number > 50 && number < 90) {
    return "L" + result(number - 50);

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
