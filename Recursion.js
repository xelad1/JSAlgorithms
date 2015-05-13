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

var iterativeFactorialRecursion = function (num) {
  if (num <= 1) {
    return 1;
  };
  
  return num * iterativeFactorialRecursion(num - 1);
}

//We've all seen this, however what happens when we expand this function?
//Expanded visualization of function here:

//Basic Iterative Each

var iterativeEach = function (collection, iteratee) {
  
  for(var i = 0; i < collection.length; i ++) {
    iteratee(collection[i]);
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
iterativeFactorialRecursion(6)
6 * iterativeFactorialRecursion(5)
6 * 5 iterativeFactorialRecursion(4)
6 * 5 * 4 * iterativeFactorialRecursion(3)
6 * 5 * 4 * 3 * iterativeFactorialRecursion(2)
6 * 5 * 4 * 3 * 2 * iterativeFactorialRecursion(1)
//Reaches base case
6 * 5 * 4 * 3 * (2 * 1)
6 * 5 * 4 * (3 * 2)
6 * 5 * (4 * 6)
6 * (5 * 24)
6 * (120)
720






//Write out recursive-iteration space complexity visualization

//However, we could save space using some tricks, like an accumulator

var accumulativeFactorialRecursion = function (num, accumulator) {
 
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

//Divide and Conquer Algorithms (Generally Recursive in Nature)
//How do we tackle these?

//1.  We first Divide the problem into a number of subproblems
//2.  We then conquer the subproblems by solving recursively
//2a. If problems are small enough then we solve in a straightforward manner
//3.  Combine solutions to subproblems into the solution for original problem
//To reiterate:  Divide, Conquer, Combine

//Case Study:  Mergesort (And general Merge Procedure)
//Analyzing the Merge Procedure
//Is there a way to break this problem into very small components?

var Merge = function (A, p, q, r) {
  
  var subPQ, subQR, i, j;

  //Compute length of subarray A[p...q]
  subPQ = q - p + 1;

  //Compute length of subarray A[q + 1...r]
  subQR = r - q;


}



//Merge Procedure (quicksort?)
//Divide and Conquer algorithms
//Divide, Conquer, Merge

//Not using side effects in a recursive problem
//Returning the recursive function itself (ie not storing in an array)
//Function doesn't depend on anything beyond its own scope


