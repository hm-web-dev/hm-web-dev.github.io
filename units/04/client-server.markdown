---
layout: home
title: "4.4 Exercise: Client-Server Communication" 
nexttitle: "Re-Proposals"
nexturl: units/05/project-reproposals
prevurl: units/04/vue-routing
prevtitle: "4.3 Vue Routing"
--- 

## Overview

In this exercise, you will learn how to make HTTP requests to different servers using the fetch library. The fetch library is a native library to javascript, meaning you can utilize it from either a browser or from a a backend API written in javascript. In this example, we will make HTTP requests from the browser (our front end project), but you can make requests from your backend as well.

## Review

Recall what a full stack web app consists of:

1. Client Side (Front End)
2. Server side (Back End)
3. API calls between Front End and Backend

AJAX is a method to communicate between frontend and backend (the AJ stands for Asynchronous Javascript. the AX stands for "And XML," but XML format is not typical anymore).

![AJAX is the internet that sits between client and server]({{ "/units/04/client-server.png" | absolute_url}})

In the figure above, AJAX is the “internet” in between client and server. It is important to note that servers can also make fetch requests to other servers as well.

## A. Finding a Server and URL

I’ve booted up my sample backend on Render, a free server hosting service. It is here: [https://hm-bookstore-api.onrender.com/](https://hm-bookstore-api.onrender.com/)
Read through the source code ([github link](https://github.com/hm-web-dev/api-lab-example/blob/main/index.js))) to see what URL I should make a GET request to get a specific user.

What is the resource path (listed in index.js)? _______

What is the full path, including the domain of the website above? ______________________

Extra check: If this was a POST request that CREATED something to this list of resources that we are getting, what is the resource path? What else would you need to pass in? (Recall: postman)  ______________________________________

## B. Call an API on the internet using Fetch 

Here’s the code for making an API request. You can put it in a method when you first are looking at a function! 

```javascript
    const response = await fetch(`SOME_URL`);
    console.log(response);
```

Note: that fetch’s default method is GET on a url.

Note: we use the keyword await before fetch, which deals with Promises, which is a special Javascript object that promises to do some work before returning data, but takes some time to do so. This allows the browser to process other code elsewhere while the work is being done here (there is work being done asynchronously). All you really need to know about promises is to label any function that returns a promise with async before the name (or the input, if anonymous) to compile this correctly. 

1. From your vue app, get the user for ID 3 by calling `fetch()` on the server provided above and display the first_name, last_name, and email in the component.
2. From your vue app, **create** a user and display the created ID. You should consult the fetch documentation in the "Mode Resources" section below to change the REST method and pass extra parameters in the request.

## C. Call an API in local development using Fetch

In development, you will probably have to test your connection to the backend while you’re still developing your backend. Therefore, you should be running your BACKEND and FRONTEND in tandem, on separate ports. 

You can use the backend you made in lab 3 or the intro-to-sqlite backend you forked to test this out.

1. Spin up your backend. It should have a port number. 
2. In your front-end code, call `fetch()` 

Make sure whatever port you’re calling your local front end on is whitelisted as accepted “origins” for security reasons: see [CORS code](https://github.com/hm-web-dev/intro-to-sqlite/blob/main/index.ts#L20-L35) here.

## More Resources

1. Render: [https://render.com/](https://render.com/)
2. Fetch Documentation: [https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)
3. Promises: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
