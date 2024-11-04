---
layout: post
title: "Exercise: Javascript Functions" 
nexttitle: 3.3 Typescript
nexturl: units/03/js-typescript
prevurl: units/03/js-types
prevtitle: 3.1 JS Types
--- 

## First Class Functions

In Javascript, functions are considered **first-class**; in other words, they are treated just like any other variable. For example, the following two snippets of code are exactly the same:

```js
// Snippet 1
const foo = function(x) { return x + 1; }

// Snippet 2
function foo(x) {
  return x + 1;
}
```

This allows us to write functions that can take functions as parameters, or even return functions. These are called **higher-order** functions.

You can read more about this concept [at the Mozilla developer docs](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)!

1. Examine the following snippet of code. What is printed at the end?

    ```js
    const add1 = function(x) { return x + 1; }
    const add2 = function(x) { return x + 2; }
    const foo = function(fn1, fn2, x) {
    return fn1(fn2(x));
    }

    console.log(foo(add1, add2, 3));
    ```

2. Write a function `addN` that takes a number `n` and returns another function that takes a number `x` and returns `x+n`. For example, calling `addN(2)(3)` should return 5.

## Arrow Functions

There is also another way to write a function in Javascript. For the most part, you can treat this as syntactic sugar; notice the lack of the `return` statement. The following three lines of code each do the exact same thing:

```js
function foo(x) { return x + 1; }
const foo = function(x) { return x + 1; }
const foo = (x) => x + 1;
```

## Callback Functions

A **callback function** is a function that is passed into another function as a parameter. For example, `setTimeout` takes a callback function that will execute after 1000 ms, written using an arrow function or in the regular function notation:

```js
// Snippet 1 - regular function notation
setTimeout(function() {
  console.log("Hello!");
}, 1000);

// Snippet 2 - arrow function notation
setTimeout(() => console.log("Hello!"), 1000);
```

When a function is passed into another function without being named, it is called an **anonymous function**. Both the functions that `console.log` in the above snippets are anonymous functions. You'll see these *a lot* in javascript code, both in front end and back end development.

## Exercises

1. Write an arrow function that takes a string and returns the lowercase version of that string.
2. Write an arrow function that takes a string `prefix` and returns a **function** that prepends `prefix` to its own parameter.
   
   ```js
   const prefix = "Hello, ";
   const funcPrepend = (prefix) => {
      // Your code here
   }
   // funcPrepend("hello") -> function that takes a string) 
   // funcPrepend("hello")("world") -> "hello world"
   ```
3. Write an arrow function that takes a string `prefix` and returns a **function** that takes a string `postfix` that returns another function that takes a string and returns correctly prepends/appends the pre/postfix to its parameter.
   
    ```js
    const prefix = "Hello, ";
    const postfix = "!";
    const funcPrepend = (prefix) => {
        // Your code here
    }
    // funcPrepend("hello") -> function that takes a string) 
    // funcPrepend("hello")("foo") -> function that takes a string
    // funcPrepend("hello")("goodbye")("foo") -> "hello foo goodbye!"
    ```
This was just showing you that you can return functions from functions. 

Some of these practice questions are taken from [eloquentjavascript.net](https://eloquentjavascript.net/05_higher_order.html).

1. Write a function that maps (use `map()`) number grades to letter grades. Use the following grading scale: 
  ```
   A is 89.5-100, B is [79.5-89.5), C is [69.5-79.5), D is [59.5-69.5), and F is [0-59.49).
  ```

  ```js 
  const scores = [95, 72, 88, 55, 78, 92];
  // lettergrade(scores) -> ["A", "C", "B", "F", "C", "A"]
  ```

2. `reduce` ((sometimes also called `fold`) is a higher order function that is used for summarizing arrays into one value. Implement a function `flat()` to “flatten” an array of arrays into a single array that has all the elements of the original arrays using the `reduce` function. Hint: you can also use the `concat()` function.

```js
let arrays = [[1, 2, 3], [4, 5], [6]];

// flat(arrays) → [1, 2, 3, 4, 5, 6]
```

6. Write a function `every(array,test)` that returns whether `test` returns true for every element in the given array.

```js
function every(array, test) {
  // Your code here.
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
```