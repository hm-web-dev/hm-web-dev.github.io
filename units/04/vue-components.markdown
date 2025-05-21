---
layout: home
title: "4.2 Exercise: Vue Components" 
nexttitle: "4.3 Vue Routing"
nexturl: units/04/vue-routing
prevurl: units/04/vue-intro
prevtitle: "4.1 Vue Intro"
--- 

## Overview - Vue Components

Now that we know the basics of Vue and how to deal with data using javascript and render that data using the `<template>` tag and inserting HTML with some extra Vue directives, let's dive more into components and start seeing how Vue files can come together to make a cohesive web app. Vue files create a component hierarchy and data can be passed to child components through `props`, and child components can force events to refresh data using `emits`.

## Questions

These are questions about the [book-trading-example](https://github.com/hm-web-dev/book-trading-example/tree/19d65d3ed0e5b9ab692514e9dc39b53a526ebef0) repo. You can download the code without creating a github repository - this is just for [practice](https://github.com/hm-web-dev/book-trading-example/archive/19d65d3ed0e5b9ab692514e9dc39b53a526ebef0.zip) anyway.

1. What is the "root" Vue file/component that creates the rest of the vue files/components? How could you tell? (hint, look at the index.html page!)

2. Inspect the `HomeView.vue` file.
   1. What is the name of the key to utilize a subcomponent (in `export default`)?
   2. What subcomponent does HomeView import? 
   3. Where is HomeView itself used as a subcomponent? (Search the entire repository!)

## Practice!

1. Use `BookView` as a subcomponent in `TradesView.vue`
2. Use `BookView` as a subcomponent in `SearchView.vue`
3. When accepting a trade in Trade, **emit** a response to `App.vue` that:
   1. Removes your incoming trades
   2. The trade gets passed to `AccountView.vue` as part as your trade history.