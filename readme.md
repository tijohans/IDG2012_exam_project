# NB: Proper readme is the readme.pdf file 

## Sources
[Button sizes](https://www.kalamuna.com/blog/3-simple-tips-ux-button-design)
[Form accessibility](https://uxdesign.cc/5-ways-to-make-web-forms-accessible-fb3ccb9f1752)
[Yale articles on accessibility](https://usability.yale.edu/web-accessibility/articles)

[Accessibe Accessibility Checker](https://accessibe.com/accessscan)

[Email validation regex](https://www.w3resource.com/javascript/form/email-validation.php)

[Placeholder text](https://www.tasteofhome.com/about-taste-of-home/)
[Cookie video](https://www.youtube.com/watch?v=h4CyhQqAPpk&ab_channel=Tasty)


## Notes: 

### Dialog: 
Using the dialog element with the showModal() function, will implicitly have both the aria `role="dialog"`, and the `aria-model="true"` attribute, making it the ideal option for pop-ups. The dialog element also has a pseudo class of `::backdrop`, which can be styled to give sufficient contrast between what is interactive and what is not. 

### Aria-labelledby

Used aria described by on all the links on the recipes page, to tell the link which recipe the user is about to view. Even though the link says "view recipe", it may not be clear to the user out of context, __which__ recipe they are about to view. Usin the aria-describedby will hopefully negate this confusion. 

### Font Choice 

Chose the font Atkinson's Hyperlegible, which is a font designed for people with reading and writing difficulties.
