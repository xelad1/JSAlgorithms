//Teaching Recursion
//1.  Know when to stop
//2.  Decide how to take one step
//3.  Break the journey down into that step plus a smaller journey

//Recursion Notes for Lecture
//Head Recursion

//???


//Tail Recursion
//What is the benefit of using Tail Recursion?
//We get to evaluate all of our values before the recursive call

//Iterative Solutions (each, map, reduce) as recursion

var recursiveFactorial = function (num) {
  if (num <= 1) {
    return 1;
  }

  return num * recursiveFactorial(num - 1);
}

var pureIterativeFactorial = function (num) {
  var factVal = 1;

  if (num <= 1) {
    return 1;
  };

  for (var i = 2; i <= num; i ++) {
    factVal *= i;
  }

  return factVal;

}
//We've all seen this, however what happens when we expand this function?
//Expanded visualization of function here:

//Basic Iterative Each

var iterativeEach = function (collection, callback) {
  var i;

  for(i = 0; i < collection.length; i ++) {
    callback(collection[i]);
  }
}


//We can even do this with some of our well known functions!
//Think of your first few Underscore functions, most are done iteratively
var recursiveEach = function (collection, callback, index) {
  
  //Base case?  Reach the end of the collection
  index = index || 0;

  if(index < collection.length - 1) {
    callback(collection[index]); 
    return recursiveEach(collection, callback, index + 1);
  }

}

//However, look at all the space we use up!
recursiveFactorial(6)
6 * recursiveFactorial(5)
6 * 5 * recursiveFactorial(4)
6 * 5 * 4 * recursiveFactorial(3)
6 * 5 * 4 * 3 * recursiveFactorial(2)
6 * 5 * 4 * 3 * 2 * recursiveFactorial(1)
//Reaches base case
6 * 5 * 4 * 3 * (2 * 1)
6 * 5 * 4 * (3 * 2)
6 * 5 * (4 * 6)
6 * (5 * 24)
6 * (120)
720

//Maybe make a "Stack Frame" visualization with an arrow moving through???

//Write out recursive-iteration space complexity visualization

//However, we could save space using some tricks, like an accumulator
//This ends up simulating an iterative process

var iterativeFactorial = function (num, accumulator) {

  accumulator = accumulator || 1;

  if (num <= 1) {
    return accumulator;
  };

  return iterativeFactorial(num - 1, num * accumulator);
}

//How to tackle recursion!
//What are the common pitfalls to tackling recursive problems?
//1. We start coding too soon!
//2. We don't break the problem apart properly!
//3. Figure out the repetitive pattern


//[1,2,3,4,5,6,7]
//Visualizing with an array of values

//Important cases of recursive problems
//1.  Divide and Conquer
//2.  Flood Fill Algorithms
//3.  Combinatorics/Permutations

//binarySearch requires an array to already be sorted

//Divide and Conquer Algorithms (Generally Recursive in Nature)
//How do we tackle these?

//1.  We first Divide the problem into a number of subproblems
//2.  We then conquer the subproblems by solving recursively
//2a. If problems are small enough then we solve in a straightforward manner
//3.  Combine solutions to subproblems into the solution for original problem
//To reiterate:  Divide, Conquer, Combine

//Example of the Divide Step

var mybinarySearch = function (array, value, beg, mid, end) {
  
  beg = beg || 0;
  end = end || array.length - 1;

  //mitigates for js viewing 0 as a falsey value
  if (mid === 0) {
    mid = 0;
  } else {
    mid = mid || Math.floor((array.length - 1) / 2);
  }
  

  //What are our base cases?
  if (array[mid] === value) {
    return "Value found at index " + mid;
  } else if (beg === mid && mid === end) {
    return "Value not found!";
  } else if (value > array[mid]) {
    beg = mid + 1;
    mid = Math.floor((beg + end)/2);

    return mybinarySearch(array, value, beg, mid, end);
  } else if (value < array[mid]) {
    end = mid - 1;
    mid = Math.floor((beg + end)/2);

    return mybinarySearch(array, value, beg, mid, end);
  }
}


//Case Study:  Mergesort (And general Merge Procedure)
//Analyzing the Merge Procedure
//Is there a way to break this problem into very small components?

//What is our approach to DIVIDING this problem?
//b(eginning) and e(nd)
//Let's say we have a range of b - e of books on a bookshelf
//We want to first find the m(idpoint) between these books



var mergeSort = function (arr, beg, end) {
  


  var merge = function (arr, beg, mid, end) {
    
    //Let's 


  }

}

//Flood fill/pathing algorithms



//Merge Procedure (quicksort?)
//Divide and Conquer algorithms
//Divide, Conquer, Merge

//Not using side effects in a recursive problem
//Returning the recursive function itself (ie not storing in an array)
//Function doesn't depend on anything beyond its own scope