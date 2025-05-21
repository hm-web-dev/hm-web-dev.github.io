---
layout: home
title: "4.3 Exercise: Vue Routing" 
nexttitle: "4.2 Vue Components"
nexturl: units/04/client-server
prevurl: units/04/vue-components
prevtitle: "4.1 Vue Intro"
--- 

## Overview

Vue allows for creating a single page app or SPA 💆🏻‍♀️🌿🛁 with all the benefits of a MPA (e.g. SEO), while keeping all the data all in one app (you do not have to make round trips to the server).

Routes in your app can be configured in `/router/index.ts` of every created Vue project. 

Insert `<RouterView>` in your root Vue component, and use `<RouterLink>` wherever in your app you want to change the route, which acts as an `<a>` anchor element.

This is how you specify two routes, one with a static path `/home`, and one a dynamic path, like `/book/948-111111111` (an example ISBN) in `router/index.ts`

```javascript
  const router = createRouter({
      //... more router config options 
    routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/book/:isbn', // dynamic ids, like in express
      name: 'book',
      props: true,
      component: BookView,
    }
    // more routes
  ]
  })
```

And this is an example to link to each of these components in a Vue HTML template.

```javascript
<RouterLink to="/">Home</router-link>
<RouterLink :to="{name: 'book', params: {isbn: book.isbn}}">View Details</RouterLink>
```

## Practice - Bringing it all together

1. Create a front-end app using `npm create vue@latest`.
2. Create at least 3 pages for your app.
3. One page must be 'static' and not take any parameters.
4. One page must be 'dynamic' and take in a different parameter in their path.
5. Please upload your code as a github repo and include a link to the repo in a comment on Google Classroom.
