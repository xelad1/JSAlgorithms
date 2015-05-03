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
//
var selectionSort = function (array) {
  

  //find the first smallest element in the list
  //then exchange with A[1]

  var smallest;
  var smallestIndex;
  var i, j;
  var len = array.length;


  for (i = 0; i < len; i ++) {
    console.log(array);

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

//[5,4,3,2,1]
//

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

//Merge sort

var mergeSort = function  (array) {
  
  var i, j = 1;
  var n = null;
  var k;

  for (k = 0; k < n; k++) {

    if ()
  }
};




















