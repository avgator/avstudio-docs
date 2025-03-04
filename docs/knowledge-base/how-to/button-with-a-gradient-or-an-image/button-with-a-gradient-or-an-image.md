---
title: "How to create button with a gradient"
sidebar_label: "How to create button with a gradient"
sidebar_position: 1
tags:
  - knowledge-base
  - button
  - gradient
  - image
  - avstudio
  - how-to
---

## Introduction

In this guide, you will learn how to create a button with a gradient background using custom CSS. This can enhance the visual appeal of your buttons and make them stand out on your user interface.

## Create a custom CSS class

Open your AVStudio project, page or subpage, select project CSS in the left menu. It will open CSS editor. Create a new CSS class named `button-gradient` and add the following CSS code:

```css
.button-gradient {
background: linear-gradient(0deg, rgba(23,34,49,1) 0%, rgba(56,219,213,1) 100%);
}
```

![create button-gradient CSS in AVStudio](./img/button-gradient-step1.jpg)


## Use the custom CSS class in your element

To apply the gradient background to a button, add the `button-gradient` class to your button element in your project:

![Apply custom CSS class button-gradient to element AVStudio](./img/button-gradient-step2.jpg)


This will render a button with the specified gradient background.

