---
title: Project Variables Overview
sidebar_label: Project Variables
description: "Learn how to define and manage project variables to control state, respond to signals, and trigger actions across your application."
sidebar_position: 8
order: 8
tags:
  - avstudio
  - getting-started
  - project-variables
  - variables
  - signals
  - reactivity
  - dynamic-data
  - state
---

# Project Variables Overview

Learn how to define and manage project variables to control state, respond to signals, and trigger actions across your application.

The Project Variables section in AVstudio lets you define and manage custom variables that store dynamic values. These variables can be used to control logic, respond to signals, and trigger actions across your project. With support for default values, signal feedback, and formatter functions, project variables give you flexible control over your application’s behavior.


## Accessing Project Variables

Project variables are managed in the Variables section, where you can create and control dynamic values used throughout your project.

![Variables Tab](./img/variables-ui-overview.png)

**① Variables Tab** – Located in the top navigation bar, this tab opens the Project Variables section.

**② Add Project Variable** – Click this button to create a new variable. It opens the **Create Project Variable** window, where you can configure the details.


## Creating a Project Variable

The Create Project Variable window lets you define the structure and behavior of a variable, including type, signal interactions, and formatting logic.

![Create Variable Dialog](./img/variables-create-window.png)

**① Name** – Assign a unique name to the variable.

**② Type** – Choose from three data types: `Boolean`, `String` or `Number`

**③ Default Value** – Set the initial value for the variable. For Booleans, you can toggle between `True` or `False`.

**④ Set Value Signal** – Assign signal feedback for dynamically updating the variable via external inputs.

**⑤ Format Output Value** – Optional checkbox. When enabled, allows formatting of the variable output.

**⑥ Format Value with Function** – Dropdown to select a formatter (e.g., `Toggle boolean`). Only available if formatting is enabled.

To complete setup, click `Create Variable`. To cancel the process, select `Cancel`.

## Project Variables Dashboard Overview

Once project variables are created, they appear in the Variables dashboard. This section gives you access to all current variables, their configuration, and editing options.

![Project Variables Dashboard](./img/variables-dashboard-overview.png)

**① Project Variables Header** – Shows how many variables exist in the project. This helps you keep track of your current variable count.

**② Filter By Name** – Useful when you have a long list of variables. You can quickly search and locate any variable by typing its name.

**③ Type** – Indicates the data type assigned to the variable (`boolean`, `string`, or `number`).

**④ Default Value** – Displays the starting value for the variable. This field is editable — for example, you can change a `false` value to `true` if needed.

**⑤ Signal FB Setter** – Lets you define or edit the signal feedback used to dynamically update the variable.

**⑥ Formatter Function** – If you didn’t assign a formatter during creation, you can still attach one here using the dropdown. You can select options like `Toggle boolean`.

**⑦ Side Effect Actions** – This section supports **reactivity**, which allows you to define actions that should run when the variable’s value changes. Hovering over the info icon provides more context.

**⑧ Controls (Three Dots)** – Clicking the three-dot menu opens the option to `Delete` the variable from your project.

## Summary

Project Variables enable reactive, stateful behavior across your project. By defining types, defaults, signal feedback, and optional formatters, you can centralize state management and trigger side-effect actions reliably.
