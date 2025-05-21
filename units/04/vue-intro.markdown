---
layout: home
title: "4.1 Exercise: Vue Intro" 
nexttitle: "4.2 Vue Components"
nexturl: units/04/vue-components
prevurl: units/03/lab
prevtitle: "Lab 3: Project Proposals"
--- 

## Overview - Why Vue?

From the beginning of the year, we know we can just code html / css / js files and put them directly on the web. Why not? Because of **reusability**. If your pages have similar components, you'd have to repeat all the HTML for each time you have a component.

This is where Vue <img width="32" alt="Vue.js Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/32px-Vue.js_Logo_2.svg.png?20170919082558"> comes in. It is a system allowing for reusability but also **readability**; you can write reusable javascript, HTML, and CSS to  write dynamic web pages that changes with different data. The reusable pieces of code you write are called components (more on that later). Each component can have HTML to serve as a **template** that has access to and knowledge of javascript variables and functions. Writing front-end code in this way, where the view (HTML + CSS) simply states how the data (created in Javascript) should be rendered, is called **declarative** programming.

## Task

Get to at least step 7 on the [Vue tutorial](https://vuejs.org/tutorial/#step-1). I recommend the Options API because it is the most similar to Object-Oriented Programming, which everyone is familiar with. The Composition API is less verbose but learning its syntax, in my opinion, has more of a learning curve.

Then, try to do last three questions that we did last time with front-end Javascript but, use Vue now!

Remember common vue directives (attributes):

1. v-bind (binds data in javascript to be rendered somewhere in HTML)
2. v-on (binds user interactivity with HTML to executable code in javascript)
3. v-for (allows to for-loop HTML elements and Vue components)
4. (do #4-#6): [Link](https://hm-web-dev.github.io/units/02/js)

Post a Vue playground link to your component to show the class.
Playground link to what we did in class today [here](https://play.vuejs.org/#eNp9VNtuEzEQ/ZXBQkqilg0InkJSLlUf4AEQ9AWxSHW9k103XtvyJaSK8u+M9w6tKq20O5fjOXNm1kf2wdpsH5Gt2NoLJ224yDUerHEBCtzyqAIccw2wXIJDLoLcI/jAAyZnwQOfL9oEoHiITvcWgDBRhxW8PO8dW4mqWMHsVkWcDV7LHS8dt5Vfwa/frfeUXidK6Upvo6bSRnsIFQ9Qx8Sg5QFcFxCcLEt0EC1RQp9QNYbKFHRmx0dq4bBGHUbCQKdJnzU8z866yh2vYMpS4aXi3j8ANH3ABuZTa7PpGlvAO5g5LGbQt9qDH+9NyS2Ke6EQKmN2LffECIuxsKDWjcJMmXJ+c10hdSOD5KrVGKSH58exl1N2s2iK5Jqe9XIYLBkBa6tII7IA1rcxBKPhvVBS7DY5G2eR2eir+atFzi4uU5D0XC/b9BZqYf9iaxyBkKhLPZkjYX6aCNah91gAhxb3bL20PXYlkrIEbtTL2UhhIjyd402NVNp7XlL9Dv4/62G0iWwnCM392KlzOk2Yr5cTBcj04V6lz4wm1qotjDJuRdtcvG30o1ia4j/B5GijpG5zAjtnwdOYtrLM7rzR9EM1gJwJU1up0H21zQbnbFjJnHGlzJ/PjS+4iN3uEaZCsXvEf+cPyZezb6Qtuj3mbIgF7kokCVL46scXPND3EKxNERVlPxH8jrRiMXFs0z5GXRDtSV7D9lOdLgepy2t/dQiofd9UItqvdsqmW+XyidZHuq+zN/22stNfHVuCSw==).

> Side Note: Vue is one of the many UI Frameworks out there. There are other popular front end JS frameworks (Angular, React) that also have the principles of reusability and readability. I am teaching Vue for its flexibility (there are two ways to write Vue code) and the good documentation and videos.
