---
title: Functions Overview
sidebar_label: Functions
sidebar_position: 10
order: 10
tags:
  - avstudio
  - functions
  - javascript
  - dynamic-behavior
  - logic
  - actions
---

# Functions Overview

The Functions section in AVstudio allows you to define custom JavaScript logic that enhances your project’s interactivity. Functions can be used to manipulate variables, trigger navigation, fetch data, publish signals, and control audio playback. With built-in code snippets, live testing, and support for arguments, functions offer a flexible way to add dynamic behaviors across your application.

## Accessing the Functions Section

Functions let you write custom logic using JavaScript to handle signals, navigate, process data, and more.

![Functions Dashboard](./img/functions-dashboard.png)

**① Functions Tab** – Located in the top navigation bar. Opens the Functions section of your project.

**② Add Function** – Click this button to define a new custom function. This opens the function editor panel.

## Creating a New Function

Clicking **Add Function** opens the function editor, where you can define and test a custom function in JavaScript. This panel includes everything you need to write, preview, and save your logic.

![Add New Function](./img/functions-create.png)

**① Name** – Give your function a unique, descriptive name. This name will be used to call the function within your project.

**② Add Function Argument** – Optional. Add custom arguments that will be passed to the function when it runs.

**③ Function Body Editor** – Write your JavaScript logic here. A template is provided with the basic structure to help you get started.

**④ Test Function Console** – Displays the output of your function when tested. Helps with debugging and validation before saving.

**⑤ Run** – Executes the current code so you can preview the behavior immediately.

**⑥ Discard** – Cancels the creation process and closes the editor without saving.

**⑦ Built-in Function Snippets** – A contextual panel that provides insert-ready code blocks for common AVstudio tasks. Click any category to reveal usable methods:
- `NAVIGATE` – Route the user by page.
- `EVENTS` – Publish or retrieve signal feedback values.
- `GET DATASOURCE` – Retrieve dynamic data by UID.
- `VARIABLES` – Get or set project variable values.
- `AUDIO CONTROL` – Trigger audio playback.

Click `Save` to save the function to your project and exit the editor.

## Function Dashboard

This dashboard lists all custom functions defined in your AVstudio project, allowing you to review, edit, or manage them with ease.

![Function Dashboard](./img/functions-dashboard-options.png)

**① Functions Header** – Displays the total number of functions currently created within the project.

**② Filter by Name** – Useful when managing many functions. Type part of a function name to quickly narrow down the list.

**③ Rename Function** – Click the pencil icon beside a function name to make it editable and rename it inline.

**④ Updated** – Shows the timestamp of when the function was last saved or edited.

**⑤ Actions Menu** – Each function has an associated action menu:  
- `Edit` – Opens the function editor so you can modify the code or arguments.  
- `Clone function` – Creates a duplicate of the function with "_clone" added to the name.  
- `Delete function` – Removes the function from your project.



