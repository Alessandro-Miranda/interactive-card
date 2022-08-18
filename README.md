# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Design](#Design)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Design

You feel free to see the design files [here](./design/) to more details how screens should be. 

### Links

- Solution URL: [GitHub](https://github.com/Alessandro-Miranda/interactive-card)
- Live Site URL: [Preview](https://alessandro-miranda.github.io/interactive-card/)

## My process

### Built with

- Semantic HTML5 markup
- [TailwindCss](https://tailwindcss.com/) - For styles
- JavaScript
- Mobile-first workflow

### What I learned

The project purpose has been completely to learn and practice TailwindCss which was reached. This challenge has provided learning about how to customize and extends Tailwind Themes, configure arbitrary values for some properties, use images and linear-gradients. I think that the mainly knowledge acquired with this project was how to customize themes using `tailwind.config.js`. Bellow you can see a simple example how to configure to customize the tailwind default theme adding new colors and how to use inside HTML:

`tailwind.config.js:`
```js
  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      red: 'red',
      white: 'white'
    }
  },
  plugins: [],
}
```

`HTML file:`
```html
<h1 class="text-white">Here is a title with white color</h1>
<h2 class="text-red">Here is a another title white red color</h2>
```

### Continued development

For the future of this project, it will be implemented credit card mask and new field validations as well code refactoring to improve JS functions adding new patterns.

## Author

- GitHub - [Alessandro Miranda](https://github.com/Alessandro-Miranda)
- Frontend Mentor - [@Alessandro-Miranda](https://www.frontendmentor.io/profile/Alessandro-Miranda)