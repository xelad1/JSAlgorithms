//Teaching Recursion
//1.  Know when to stop
//2.  Decide how to take one step
//3.  Break the journey down into that step plus a smaller journey

//Recursion Notes for Lecture
//Head Recursion




//Tail Recursion

//Iterative Solutions (each, map, reduce) as recursion

var iterativeFactorialRecursion = function (num) {
  if (num <= 1) {
    return 1;
  };
  
  return num * iterativeFactorialRecursion(num - 1);
}

//We've all seen this, however what happens when we expand this function?
//Expanded visualization of function here:

//For each function


//Look at all the space we use up! 

var accumulativeFactorialRecursion = function (num, accumulator) {
 
}

//How to tackle recursion!
//What are the common pitfalls to tackling recursive problems?
//1. We start coding too soon!
//2. We don't break the problem apart properly!
//3. Figure out the repetitive pattern

//Divide and Conquer Algorithms (Generally Recursive in Nature)
//How do we tackle these?

//1.  We first Divide the problem into a number of subproblems
//2.  We then conquer the subproblems by solving recursively
//2a. If problems are small enough then we solve in a straightforward manner
//3.  Combine solutions to subproblems into the solution for original problem
//To reiterate:  Divide, Conquer, Combine


//Case Study:  Mergesort (And general Merge Procedure)
//Analyzing the Merge Procedure

//[1,2,3,4,5,6,7]
//Visualizing with an array of values

var Merge = function (A, p, q, r) {
  
  var n1, n2, i, j;

  n1 = q - p + 1;
  n2 = r - q;

  
}



//Merge Procedure (quicksort?)
//Divide and Conquer algorithms
//Divide, Conquer, Merge

//Not using side effects in a recursive problem
//Returning the recursive function itself (ie not storing in an array)
//Function doesn't depend on anything beyond its own scope

//Towers of Hanoi

//Important cases of recursive problems
//1.  Divide and Conquer
//2.  Flood Fill Algorithms
//3.  Combinatorics/Permutations

