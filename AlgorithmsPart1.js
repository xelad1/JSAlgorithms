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

//Reverse Order Insertion Sort (as per exercise 2.2 in CLRS)

var reverseInsertionSort = function (array) {
  var length = array.length;
  var i, key, j;

  //loop through the array
  for (i = 0; i < length; i++) {

    j = i;
    key = array[j];

    while (j < length) {
        if (array[j] < array[j + 1]) {
          array[j] = array[j + 1]; 
          array[j + 1] = key;
        };
        j++;
        console.log(array);
      }
    }
  return array;
};


  j
//12345

//Merge sort

var mergeSort = function  (array) {
  
  var i, j = 1;
  var n = null;
  var k;

  for (k = 0; k < n; k++) {

    if ()
  }
};