var numerals = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
var numbers = ['1', '4', '5', '9', '10', '40', '50', '90', '100', '400', '500', '900'
, '1000'];

var numberConverter = function (input) {
  var sum = "";
  var inputToString = input.toString();
  //var reverseInput = input.reverse()
  if (input >= 4000 || input <=0 || isNaN(input)) {
    alert("this is not a number between 1 and 3999")
  }
  else if (numbers.indexOf(inputToString) > -1) {
    for (var idx = 0; idx < numbers.length; idx ++) {
      if (inputToString === numbers[idx]) {
        sum = sum.concat(numerals[idx]);
        inputToString = inputToString.replace(numbers[idx],"");
        alert(inputToString)
      }
    }
    alert(sum);
  }
  else{
    alert('this is not passing')
  }
};



$(function(){
  $('.blanks form').submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($('input#numbers').val());
    var convertedNumber = numberConverter(inputNumber);
  });
});
