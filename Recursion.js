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


//Look at all the space we use up! 

var accumulativeFactorialRecursion = function (num, accumulator) {
 
}

//How to tackle recursion!
//What are the common pitfalls to tackling recursive problems?
//1. We start coding too soon!
//2. We don't break the problem apart properly!
//3. 





//Merge Procedure (quicksort?)
//Divide and Conquer algorithms
//Divide, Conquer, Merge

//Not using side effects in a recursive problem
//Returning the recursive function itself (ie not storing in an array)
//Function doesn't depend on anything beyond its own scope

//Towers of Hanoi


