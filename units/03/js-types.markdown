---
layout: post
title: "3.1 Exercise: Javascript Types"
nexttitle: 3.2 JS Functions
nexturl: units/03/js-functions
prevurl: units/02/lab
prevtitle: Lab 2
--- 

## Types

Look at the following code, then figure out the type of each `foo` for each language.

```java
// Java
double foo1 = 1.72;
void foo2(int bar){
    System.out.println("Goodbye.");
}
int[] foo3 = new int[] {1,2,3,4,5};
```

Any example function calls will help with figuring out the type of each function!

```python
# Python
foo4 = [1, 2, 3, 4, 5, 'hi']
foo5 = {'bar': 'baz', 2: 3}
def foo6(bar):
    return bar + 1
# foo6(3) >>> 4
```

```javascript
// Javascript
const foo7 = 23.8
const foo8 = [1, 2, 3, 4, 5, 'hi']
const foo9 = {'bar': 'baz', 2: 3}
const foo10 = x => x + 5
// foo10("hello") >>> "hello5"
// foo10(4) >>> 9
function foo11(x){
    return function(y){
        return x + y
    }
}
//foo11(3)(5) >>> 8
//foo11("hello")("world") >>> "helloworld"
const something = document.getElementById()
// what happens when 
```

## Type coercion

What is the result of this code?

```java
    // Java - you may use jshell in your terminal to work these out. 
    1. 0 == false;
    2. 
        String foo = "bar"; 
        foo = 1;
    3. 
        foo + "bar";
```

```python
    # Python - use `python` in your terminal to work these out.
    1. 0 == False 
    2. 
        foo = "bar"
        foo = 1
    3. 
        foo + "bar"
```

```javascript
    // Javascript - use `node` in your terminal
    1. 0 == false // is there another operator we can use to return another result? 
    2. 
        var foo = "bar"
        foo = 1 
    3. 
        foo + "bar"
```

What can you say about the type coercion in each language?

## Object Inheritance Through Prototypes

Usually, you have to use prototypes to inherit from another object in Javascript. However, ES6 (a version of Javascript released in 2015) introduced classes as syntactic sugar for this. Hooray!

Because of some weird printing behavior, please use your browser console to run this code (not the node environment!)

```javascript
// Prototype inheritance 
function Animal(name) {
    this.name = name;
}

console.log(Animal.prototype);
```

What is this prototype object? What's inside of it?  

```javascript
Animal.prototype.speak = function() {
    console.log(this.name + ' makes a sound.');
}

console.log(Animal.prototype);
```

What is this prototype object now? What's inside of it? What has changed?

```javascript

const dog = new Animal('Buddy');
dog.speak(); 
console.log(Object.getPrototypeOf(dog))
```

What happened when you called this code? 
This is a little weird - combining variables and functions together is Object-Oriented Programming and should use Classes like all other languages, and prototypes are quite strange to understand at first. So ES6 introduced classes as syntactic sugar for this.

```javascript
// Classes as syntactic sugar
class AnimalClass {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a sound.');
    }
}
console.log(AnimalClass.prototype); 
// if you run this in node, you'll only see an empty object 
// run this code to show the hidden prototype: console.log(util.inspect(AnimalClass.prototype, { showHidden: true }));
```

Can you write code to make a new `AnimalClass` object and call the `speak` method on it using Classes as syntactic sugar?

For more, you can read about [prototypes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) and [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

Just know that you can use classes in Javascript like you would in any other language, but under the hood, it's still using prototypes.