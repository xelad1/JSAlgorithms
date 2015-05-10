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

//Merge Procedure (quicksort?)
//Divide and Conquer algorithms
//Divide, Conquer, Merge

//Not using side effects in a recursive problem
//Returning the recursive function itself (ie not storing in an array)
//Function doesn't depend on anything beyond its own scope
