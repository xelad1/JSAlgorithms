//Insertion sort (following code from CLRS)

var insertionSort = function (array) {
  var length = array.length;
  var i, key, j;

  for (i = 2; i < length; i++) {
    key = array[i];
    //Insert A[i] into the sorted sequence A[1 ... j - 1];
    j = i - 1;
    while (j > 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }

  return array;
};

//My own insertion sort

var myInsertionSort = function (array) {
  var length = array.length;
  var i, key, j;

  //loop through the array
  for (i = 1; i < length; i++) {

    j = i;
    key = array[j];

    //iterate backwards from the i value
    //    
    while (j > 0) {
      if (array[j] < array[j - 1]) {
        array[j] = array[j - 1];
        array[j - 1] = key;
      }
      j--;
    }
  }
  return array;
};


//Selection sort

var selectionSort = function (array) {
  

  //find the first smallest element in the list
  //then exchange with A[1]

  var smallest;
  var smallestIndex;
  var i, j;
  var len = array.length;


  for (i = 0; i < len; i ++) {

    for (j = i; j < len; j ++) {

      if(!smallest) {
        smallest = array[j];
        smallestIndex = j;
      }

      if(array[j] < smallest) {
        smallest = array[j];
        smallestIndex = j;
      }
    }

    array[smallestIndex] = array[i];
    array[i] = smallest;
    smallest = null;
    smallestIndex = null;
  }
    
  return array;
}

//Canonical Selection Sort
var canonicalSelectionSort = function (array) {
  var i, j, iMin, swapped;
  var n = array.length 

  for (j = 0; j < n - 1; j ++) {

    iMin = j;

    for (i = j + 1; i < n; i ++) {

      if (array[i] < array[iMin]) {
        iMin = i;
      }
    }

    if (iMin != j) {
      swapped = array[j];
      array[j] = array[iMin];
      array[iMin] = swapped;
    }
  }

  return array;
}
//Reverse Order Insertion Sort (as per exercise 2.2 in CLRS)

var reverseInsertionSort = function (array) {
  var length = array.length;
  var i, key, j;

  //loop through the array
  for (i = length - 1; i > 0; i--) {

    j = i - 1;
    key = array[j];

    while (j < length) {
        if (array[j] < array[j + 1]) {
          array[j] = array[j + 1]; 
          array[j + 1] = key;
        };
        j++;
      }
    }
  return array;
};



//Pseudocode for linear search

//Input: sequence of n numbers in set A
//Output: Index i or nil if val does not appear in set A
//This is fairly trivial to do, just involves a loop

//Merge Sort

//Explain the process of Merge Sort
//Divide: Take n elements to be sorted into two subsequences of 
//n/2 elements each.
//Conquer: Sort the two sequences recursively using merge sort.
//Combine:  Merge the two sorted subsequences to produce answer.

//p <= q < r
var mergeSort = function  () {

  //merge subroutine

  var merge = function  (Array, p, q, r) {
    // body...
  }

}














var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

numberToEnglish = function (number) {

  var i, j, k, l;
  var length = number.length;
  var splitNum = number.toString().split("");

  var lessthan20 = function (number) {

      var numReturn = numbersToWords[number];
      return numReturn;
  }

  var lessthan100 = function (number) {

    if(number < 20) {
      return lessthan20(number);
    }
    
    var splitNum = number.toString().split("");
    var tensPlace = splitNum[0] + "0";
    if(splitNum[1] === "0") {
      return numbersToWords[number];
    } else {
      return numbersToWords[tensPlace] + " " + numbersToWords[splitNum[1]];
    }
  }

  var hundredsPlace = function (number) {
      if(splitNum[1] === "0" && splitNum[2] === "0") {
        return numbersToWords[splitNum[0]] + " " + numbersToPlace[100];
      } else {
        return lessthan20(splitNum[0]) + " " + numbersToPlace[100] + " " + lessthan100(splitNum[1] + splitNum[2]);
      }
  }
  
  var everythingElse = function (number) {
    
  }
};

//Canonical Solution

numberToEnglish = function (number) {
  // return my value as english words
  var place, numberInPlace, numberLeft;
  var decimalPart;
  var output, restOfString, decimalString;
  // separate decimal part for later
  if (number % 1 !== 0) {
    decimalPart = number % 1;
    number = Math.floor(number);
  }
  if (numbersToWords[number]) {
    // numbers less than 20 or divisible by 10 are unique(ish) and predefined
    output = numbersToWords[number];
  } else if (number < 100) {
    // numbers less than 100 are a multiple of 10 and a single digit, hyphenated
    numberInPlace = Math.floor(number / 10);
    numberLeft = number % 10;
    output = numbersToWords[numberInPlace * 10] +'-'+ numberToEnglish(numberLeft);
  } else {
    // all other numbers are a combination of a number we can write, and a place name
    if (number < 1000) {
      // the hundreds place is special
      place = 100;
    } else {
      // all other places are a multiple of 1000
      place = 1000;
      while (place * 1000 <= number) {
        place *= 1000;
      }
    }
    numberInPlace = Math.floor(number / place);
    numberLeft = number % place;
    // assemble this 1000s place
    output = numberToEnglish(numberInPlace) +' '+ numbersToPlace[place];
    // assemble the rest of the number
    restOfString = numberToEnglish(numberLeft);
    if (restOfString !== 'zero') {
      output += ' ' + restOfString;
    }
  }
  return output;
};

















