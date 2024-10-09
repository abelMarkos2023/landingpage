# hOstify


## a hosting solution for your single page application

### The Navbar
    the navbar is dynamicly constructed by javadcript so if tou want to add more items simply go over to the app.js file and find the items array amd add another object with the link and the text that will appear on the navbar

ex Adding a nav item

```
{
    link: '#about',
    text: 'About
}

```

### clicking on the navbar

    when a user clicks on the navbar the browser will smoothly scroll the user to the specific section


### navitem highlighting
 
    when a section is in the view and passed the previous section the coresponding navitem will get a special style wher it will scale up and get a border bottom

### The navbar behaivor

    initialy when the page load or the scroll position is on the top of the page the navbar will be visible

    once the user scroll and stop scrolling the navbar will dissappear but as soon as the user start scrolling the navbar will be visible

### the move to top button

    when a user scroll down more than 400px from the top of the page a button will appear on the bottom right corner when clicking it the browser will scroll the user to the top of the page

    if the user on the top of the page or the scroll on the vertical axis is less than 400px the button will disappear 

### the other four section

    all four section are collapsable buy simply clicking on the button beside the section heading to toggle collapsing or expanding the section




### the contact section

    the contact is divided into two sections
        the top part on mobile screen or the left part on the wider screen is a contact form where the user can add his email, name and the message he wants to send

        the botto part on mobile screen or the right part on wider screen is an area where I desplyed the content on realtime bases provided by the user in the contact form to preview the data before sending it

## Important note regarding the contact form
    I added a constrained where the maximum length for the message is 500 characters long

## project demo on netlify

    [ffflandingpage.netlify.app](https://ffflandingpage.netlify.app/)
