---
layout: home
title: "3.3 Exercise: Using Typescript"
nexttitle: 3.4 Express
nexturl: units/03/express
prevurl: units/03/js-functions
prevtitle: 3.2 JS Functions
--- 

## Intro

We can use Typescript to add types to our Javascript code. This can help us catch errors before they happen, and make our code more readable.

Make a new file called `typescript.ts` and add types to the following variables:

```js
const foo7: number = 23.8
const foo8 = [1, 2, 3, 4, 5, 'hi']
```

What happens when you compile this code with `tsc typescript.ts`? Add these lines of code to the end of the file to see what happens when you try to compile it.

```js
console.log(foo7 + [2,3]);
console.log(foo8.map(x => x + 1));
```

## Type inference

Typescript is pretty smart, you don't need to add types to everything. Remove the types from foo7 and foo8 and observe that Typescript can infer the types.

## Typing Functions 

In the same file, also type the functions that you wrote for the previous assignments:

```js
const foo10 = x => x + 5
// foo10("hello") >>> "hello5"
// foo10(4) >>> 9
function foo11(x){
    return function(y){
        return x + y
    }
}
   const lettergrade = function() {
    // your code 
   }
   const flat = function() {
    // your code 
   }
   const every = function() {
    // your code
   }
```

## Typing Objects

Type this object strictly:

```js
const foo9 = {'bar': 'baz', 2: 3}
```

```js
console.log(foo9['baz']);
console.log(foo9.baz); 
```

Do both of these lines get an error on compilation? So, is bracket notation or dot notation better?

1. Write a type alias called `Citizen` for an object with keys `id` and `name`, the former being a number and the latter a string.
2. Add an optional key to that type called `description`.
3. Make an interface of those same keys, call it a `Person`.
4. Extend that type interface and call it `Student`. Add a `gpa` key to it.
5. Create a variable of type Person. 

Turn in the `typescript.ts` file to me! (you can also send in your compiled js file but that's unnecessary)