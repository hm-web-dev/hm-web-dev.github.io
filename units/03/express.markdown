---
layout: home
title: "3.4 Exercise: Express"
nexttitle: 3.5 "Exercise: SQLite With Express"
nexturl: units/03/sqlite
prevurl: units/03/js-typescript
prevtitle: 3.3 Typescript
--- 

[Express](https://expressjs.com/) is a Node library that allows you to run a server and expose endpoints for users to access. In other words, it allows you to create an API!

This problem set allows you to practice:

- Writing Javascript programs
- Building Node projects with `npm`
- Using `express` to expose REST endpoints
- Using Postman to test an API

## Exercise

Write an API with the following `GET` endpoints. Each endpoint takes at least one JSON **parameter** in the body: an array of numbers with the key `array`, and then a value that is an array of numbers. For example, `{"array": [1,2,3]}`.

1. `/add` returns the sum of the array
2. `/product` returns the product of the array
3. `/evens` returns an array of all even numbers of the original array
4. `/min` and `/max` should return the min/max number of the array, respectively
5. `/sort` should take an additional boolean parameter `ascending` in the request JSON, and return the correctly sorted array of numbers
6. `/target` should take an additional number parameter `target` , and return whether there are two numbers in the array that sum to target

Your code should use higher order functions where appropriate. For example, `reduce` will be very useful!
You should be using [Postman](https://www.postman.com/downloads/postman-agent/) to test each endpoint as you're writing this code.

## Bonus

If you want to go further with this, you should require that the header of the request has a key `Authorization` with some password. You can use the `req.headers` object to access this information. You should return an Unauthorized error (and corresponding status code) if the password doesn't match yours (you can hardcode this in your code, or put it in a hashmap or something, or put it in a file - which is unsafe - [bonus bonus](https://www.geeksforgeeks.org/node-js-crypto-createhash-method/) if you keep the passwords safe).

## Submission

Create a github repo for your API that has:

1. Your `index.ts` file, AND a `README.md` that describes your Postman tests (or you can link directly to postman)
2. Make sure you git ignore your `node_modules` folder. (create a `.gitignore` file and write `node_modules` in it)