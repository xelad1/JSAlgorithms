var x = 10;

function f () {
  alert(this.x);
}

f();

//global function which uses this to access global x
//we call use call and apply to assign this to f


var x = 10;
//Let's declare an an object o
var o = { x: 15 }

function f () {
  alert(this.x);
}

f();
//returns??? 10
//We can now invoke f using different parameters
//We can call f with this on the global object
//x is initially bound to the global setting for f()

//We can use call on f to call a seperate argument
//Call will now set the this parameter to o
f.call(o);
//returns??? 15

function f (message) {
  alert(message);
  alert(this.x);
}

//We can even pass in arguments via call
//If we now call

f(o, "I'm a message!");
//We will get back the message and then our new this.x value

