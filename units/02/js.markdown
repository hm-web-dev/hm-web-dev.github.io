---
layout: post
title: "Exercise: Javascript"
nexttitle: 2.Lab
nexturl: units/02/lab
prevurl: units/02/css
prevtitle: 2.2 CSS
---

We'll start off using Javascript in its original domain: websites. For now, we are talking about **client-side Javascript**, in that the code is run on the user's computer rather than the host computer (of the website).
Read the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) to start off; it provides an in-depth overview of Javascript syntax, as well
as examples of how it can be used in tandem with HTML and CSS.

For this exercise, I will be grading you each individually. Of course, you may work together for solidarity; if you do share code with others, please cite it in the comments!

### Questions

1. [Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash#adding_variables_to_store_our_data): What is the difference between `let` and `const`? Why would you use one over the other?
2. Describe what `document.querySelector()` does. What does *document* refer to (think back to the HTML unit!)? What is the problem with using this function? Are there other functions to select elements?
3. What is an `event` and `event handler`? Give an [example](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) of each.

### Practice

For these practice scenarios, create a new HTML page for yourself in your HTML team page github repo, or a separate one. Call it `<your-name>-js-exercise.html`. Write code that does all of the things below on this HTML page. You should [comment in](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#comments) your javascript which exercise number your code is referring to.

1. (prereq step - and needs no comment) [Add](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#external_javascript) Javascript to your HTML page. Like CSS, you can do it internally, but externally is much more organized. And organization is V important >:)
2. Create a button with a certain ID in HTML. Every time it's pressed, write JS so that add a paragraph element with text "You pressed a button!" to the bottom of the screen.
3. Create a button with another ID in HTML. Using JS, every time the button is pressed, the `innerText` in a h4 element goes up by one.
4. Create a paragraph with the text "experiment with color" and three buttons in HTML. In Javascript, write code so that clicking the button should change the text color of the paragraph to a different color.
5. Create a text input box in HTML and a button after it. When the button is clicked, your javascript should show text on the page after the input that mirrors whatever the user types in the input.
6. Create another paragraph with text "Experiment with fonts" and a drop-down menu with at least 3 different font selections (look up the semantic element [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)). Choosing an option should
change the font of the paragraph.
- Have fun [Google Fonts](https://fonts.google.com/) for this exercise! You can link the font in your HTML file by following the instructions on the Google Fonts website.

Send me a link to your html page, and in a private comment / google doc the answers to the above questions.