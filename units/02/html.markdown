---
layout: home
title: HTML
nexttitle: 2.2 CSS
nexturl: units/02/css
prevurl: units/01/lab1teamcontract
prevtitle: Lab 1
---

The [w3schools HTML Tutorial](https://www.w3schools.com/html/) is a great resource to start learning HTML. It's also a great place to look for
HTML documentation!

## Questions

1. What does HTML stand for?
2. What is the syntax for writing HTML?
3. Explain what `<head>` and `<body>` are and what they should contain.
4. What are semantic elements, and why are they preferable to regular HTML elements?
5. What is the [DOM](https://www.geeksforgeeks.org/dom-document-object-model/#)?

<!-- markdownlint-disable MD033 -->
<link rel="stylesheet" href="/assets/css/reverse-engineering.css">
<div class="flip-container">
Exercise:
<span class="letter"><span class="front">R</span><span class="back">g</span></span>
<span class="letter"><span class="front">e</span><span class="back">n</span></span>
<span class="letter"><span class="front">v</span><span class="back">i</span></span>
<span class="letter"><span class="front">e</span><span class="back">r</span></span>
<span class="letter"><span class="front">r</span><span class="back">e</span></span>
<span class="letter"><span class="front">s</span><span class="back">e</span></span>
<span class="letter"><span class="front">e</span><span class="back">n</span></span>
<span class="letter"><span class="front"> </span><span class="back">i</span></span>
<span class="letter"><span class="front">E</span><span class="back">g</span></span>
<span class="letter"><span class="front">n</span><span class="back">n</span></span>
<span class="letter"><span class="front">g</span><span class="back">E</span></span>
<span class="letter"><span class="front">i</span><span class="back"></span></span>
<span class="letter"><span class="front">n</span><span class="back">e</span></span>
<span class="letter"><span class="front">e</span><span class="back">s</span></span>
<span class="letter"><span class="front">e</span><span class="back">r</span></span>
<span class="letter"><span class="front">r</span><span class="back">e</span></span>
<span class="letter"><span class="front">i</span><span class="back">v</span></span>
<span class="letter"><span class="front">n</span><span class="back">e</span></span>
<span class="letter"><span class="front">g</span><span class="back">R</span></span>
</div>

1. Create a new github repository with a `README.md` for your individual HTML page. Call it `web-app-dev`
2. Clone it to your computer.
3. In previous years, I had you work on a team HTML page. That would be "engineering" a static web page. Now, I want you to try and "reverse-engineer" another page (and you are allowed to AI tools, provided that you cite your prompt and context that you have given them) and see what you can learn from it.
4. Find a webpage that you want to **reverse-engineer**\* and save the HTML files to your computer. (You can do this by right-clicking on the page and clicking "View Page Source", then copy-pasting the HTML code into a text file in VSCode.)
5. Document the website that you are reverse-engineering in your `README.md` file. Include a link to the website, and a screenshot of what it looks like.
6. View your downloaded HTML file in your browser. What looks wrong? The first thing is you might be missing CSS files, images, or javascript files. Try to find where these files are (You can do this by right-clicking on the page and clicking "Inspect", then going to the "Sources" tab and finding the files there.)
7. Make a commit with your progress so far.
8. You can fix the broken files by linking directly to those local (to the websites) assets by prepending the path with "http://your-websites-name.ext/" (for example, if you are reverse-engineering `https://www.example.com`, you would link to the CSS file like this: 
```html
   <link rel="stylesheet" href="http://www.example.com/path/to/css/file.css">
```
10. Make a commit with your static file fixes, and include another screenshot of your improved website.\*\*
11. Have some fun with this. Change at least one image of your webpage and one link, and have it link to another page. Somewhere in the webpage, put your name and a link to your github repo. (You can do this by changing the `src` attribute of an `<img>` tag to a different image URL, and changing the `href` attribute of an `<a>` tag to a different link URL.)
12. Make a final commit with the changes that you made.
13. Here is an [example](https://github.com/hm-web-dev/reverse-engineering-html.git) of what your repo submission should look like. 

\* - Requirements for the webpage you choose to reverse-engineer:

1. It should be a static webpage (no login required)
2. It should have at least one image (an img tag)
3. It should have at least one link to another page
4. It should be a webpage that you actually spend time on (or plan to).

\*\* - There's probably more that does not look like the exact thing! This is because most webpages these days require javascript (javascript is used to track your cookies to provide more personalized experiences, block people behind paywalls, and more complicated things that you'll learn later in this course). Here is where you can ask AI tools to help you figure out some extra javascript that we will analyze when learn javascript more in-depth. To prompt AI well, you have to give it relevant *context*, like the name of the website and the HTML code that you have. (Remember to cite your prompts and the context that you gave it in your `README.md` file! and the link to your chat. If you don't have a chat link because you are using Copilot, there is a json file that you can export by pulling up your Command Palette and typing "GitHub Copilot: Export Chat".)