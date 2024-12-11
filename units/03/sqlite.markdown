---
layout: home
title: "3.5 Exercise: SQLite With Express" 
nexttitle: "Lab 3"
nexturl: units/03/lab
prevurl: units/03/express
prevtitle: "3.4 Exercise: Express"
--- 

## SQLite

SQL is a language for interacting with relational databases. A database is actually just a file that is stored on disk. A relational database is a collection of tables, where each table is a collection of rows and columns. Each table can be related to other tables in the database (one row's data matches another row's data in another table).

SQLite is a lightweight relational database that is easy to use and is perfect for small projects.

## sqlite3

There is a npm package called `sqlite3` that allows you to interact with SQLite databases using javascript run on a Node server. You can read the documentation for it [here](https://github.com/TryGhost/node-sqlite3).

You can execute SQL commands once you install this to your node project.

## Exercise

Fork this github repository: [intro-to-sqlite](https://github.com/hm-software-eng/intro-to-sqlite)

- And clone it to your computer.
- Run `npm install` to install the `sqlite3` and `express` package, since there is a pre-existing `package.json` here that specifies these dependencies.
- Change the `index.ts` (and `db.js`) file so that it supports CRUD changes for this sample database.
- Reading the `README.md` that has links to the documentation for the sqlite3 package will be crucial for your success with this homework.
- Change the `README` to communicate to other developers what endpoints are available to hit, which is what you would do if you wish to make a public API!
- Turn this in on Google Classroom and submit a link to your github repo.