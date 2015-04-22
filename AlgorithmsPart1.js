//Insertion sort (following code from CLRS)

var insertionSort = function (array) {
	
	var length = array.length;

	for(var i = 2; i < length; i ++) {
		key = array[i];
		//Insert A[i] into the sorted sequence A[1 ... j - 1];
		var j = i - 1;
		while(j > 0 && array[j] > key) {
			array[j + 1] = array[j];
			j = j - 1;
		}
		array[j + 1] = key;
	}	

	return array;
}

//My own insertion sort

var myInsertionSort = function (array) {
	
	var length = array.length;

	//loop through the array
	for(var i = 1; i < length; i ++) {

		var j = i;
		var key = array[j];

		//iterate backwards from the i valu
		while(j > 0) {
			if(array[j] < array[j - 1]) {
				array[j] = array[j - 1];
				array[j - 1] = key;
			}
			j--;
		}
	}		
	return array;
}

//54321
//45321
//

//Merge sort

var mergeSort = function  (array) {
	
	var i, j = 1;
	var n = null;

	for(var k = 0; k < n; k ++) {

		if()
	}
}