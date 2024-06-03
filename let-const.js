//ES5 
var PI = 3.14;
PI = 42; // stop me from doing this!

//ES2015
const PI = 3.14;
PI = 42; //Now will be an error, PI is already assigned


//Quiz
//Question 1: You can reassign and redeclare Var, but you cannot redeclare with Let. Let is a block-scope
//Question 2: You can reassign and redeclare Var, but you cannot redeclare with Const. Const is a lock-scope
//Question 3: You can reassign with Let, but you cannot reassign OR redeclare with Const.
//Question 4: Hoisting is the way to explain how the JS Filer works. We can "hoist" variables to the top of the scope they are in. Also function declarations are hoisted and can be invoked before they are defined in a code base.
