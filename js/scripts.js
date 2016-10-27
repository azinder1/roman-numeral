var numerals = [["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
                ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
                ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
                ["", "M", "MM", "MMM"]];
var repArray= [];



var numberConverter = function (input) {
  var reverseInput = input.split('').reverse();
  for (var idx = 0; idx < reverseInput.length; idx ++) {
    var things = numerals[idx][parseInt(reverseInput[idx])];
    repArray.push(things);
  }
  return (repArray.reverse().join(""));
};


// var numberConverter=function romanize(num) {
//   var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
//   for ( i in lookup ) {
//     while ( num >= lookup[i] ) {
//       roman += i;
//       num -= lookup[i];
//     }
//   }
//   return roman;
// }

$(function(){
  $('.blanks form').submit(function(event){
    event.preventDefault();
    var inputNumber = $('input#numbers').val();
    var intInput = parseInt(inputNumber);
    var convertedNumber = numberConverter(inputNumber);
    if (intInput >= 4000 || intInput <=0 || isNaN(intInput)) {
      alert("this is not a number between 1 and 3999")
    } else {
      $('#output h5').text(convertedNumber);
    }
  });
});
