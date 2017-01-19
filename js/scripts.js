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
  if (number > 0 && number < 4000) {
    for (var i = 1; i <= number; i++){
       output += "I";
    }
  } else {
    return "this number is not able to be converted.";
  }
  return output;
}




//user logic
$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var number = $("input#firstNum").val();

    var answer = result(number);
    $(".result").text(answer);

  })
})
