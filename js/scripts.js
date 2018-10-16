//var string = prompt("write a sentence:");
var string = 'Bender baby';

var cap = function(string){
  var first = string.charAt(0).toUpperCase();
  var last = string.charAt(string.length-1).toUpperCase();
  return first + last; 
};

var capRev = function(string){
  var first = string.charAt(0).toUpperCase();
  var last = string.charAt(string.length-1).toUpperCase();
  return last + first; 
};

var thirdFunc = function(string){
  var number = string.length/2;
  var letter = string.charAt(number-1);
  return letter;
};

var final = thirdFunc(string) + string + capRev(string);

function reverse(s){
    return s.split("").reverse().join("");
};
//alert(reverse(final));

$("p").click(function() {
  alert("Shut the fuck up, and read it yo.");
});

$("img").click(function() {
  alert("Hey yo, I'm bender. Care for some beer?");
});