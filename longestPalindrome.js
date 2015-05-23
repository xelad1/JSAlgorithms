var longestPalindrome = function (str) {
  // body...
}

var palindromeChecker = function (str) {
  var reverse = str.split("").reverse().join("");

  if(str === reverse) {
    return true;
  }

  return false;
}