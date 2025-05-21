---
layout: home
title:  "Exercise: CSS"
nexttitle: 2.3 JS
nexturl: units/02/js
prevurl: units/02/html
prevtitle: 2.1 HTML
---

You can use [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS) as a reference.

## Questions

1. What does **CSS** stand for?
2. What are the 3 ways to include CSS in your HTML?
3. Describe the syntax for writing CSS.
4. What is a **CSS Selector**?
5. What is a *class*? How is it different from an *ID*? 
6. Explain the difference between these [CSS units](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units): `px`, `em`, `vw`, `%`, `rem`.
7. What is the difference between `margin` and `padding`?
8. What are different CSS positioning properties? What are the differences between them?

---

## Exercise

1. To learn about different CSS Selectors, play [CSS diner](https://flukeout.github.io/)! Get to at least level 14; take a screenshot of your mastery.
2. Write out css on your team's html site. I recommend using [external stylesheets](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured) and making a `styles/` directory so that each of your team members can have a separate stylesheet. Then create css files in this directory, like `<team_member_name>.css` for:
    - a. The first child of each of your lists have a different color on your individual page
    - b. Paragraph elements have no padding, but vertical margins of `1.5vh`
    - c. Add one specific *class* to two separate HTML elements and have them share a property of your choice (must be a different property than the above ones: i.e. color, padding, or margins).
3. **TEAM**: Make a new css file for your whole team to share in the `styles/` directory, and have all pages:
    - a. use the same, non-default font family.
    - b. Have a hover transition for links. You can change the color, size, have it flip around, whatever you want!
4. Play [Flexbox Froggy](https://flexboxfroggy.com/) - get to at least level 5.
5. **TEAM**: On your team's index page, make the links to your individual pages spread out horizontally using **flexbox** ( documentation [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)).
    - a. Could you make this mobile-responsive so that it changes to a vertical layout only when the screen is smaller?

## More challenges and dive into the crazy world of css, if you want

1. Write css so that: Any element with class `modal` is positioned directly at the center of the page and will not move when the page is scrolled. When you click on the element, have it disappear.
2. CSS Animations: Make a [CSS animation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) that makes an element rotate 360 degrees when you hover over it.
3. [CSS 3D!!](https://rupl.github.io/unfold/)
